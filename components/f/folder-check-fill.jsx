import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xw5oxouqi.css';
import '../../css/p/p4m9i4bbw.css';
import '../../css/n/n7dpi5bvl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xw5oxouqi"/><path class="p4m9i4bbw"/><path class="n7dpi5bvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-check-fill"} {...others} />);
}

export default Component;
