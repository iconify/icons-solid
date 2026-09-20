import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f9wrkjbdx.css';
import '../../css/b/bepdiosbn.css';
import '../../css/l/lrtfp_zks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f9wrkjbdx"/><path class="bepdiosbn"/><path class="lrtfp_zks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:blank-duotone-line"} {...others} />);
}

export default Component;
