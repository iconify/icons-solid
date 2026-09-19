import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p-ipkgb1f.css';
import '../../css/r/r-zsl_btv.css';
import '../../css/b/bevhxabeh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p-ipkgb1f"/><path class="r-zsl_btv"/><path class="bevhxabeh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:music-note-plus-solid"} {...others} />);
}

export default Component;
