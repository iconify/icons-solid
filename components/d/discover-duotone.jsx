import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bcth3ex-n.css';
import '../../css/r/r6i16ds0i.css';
import '../../css/h/hg066707f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bcth3ex-n"/><circle class="r6i16ds0i"/><path class="hg066707f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:discover-duotone"} {...others} />);
}

export default Component;
