import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uypib39ja.css';
import '../../css/w/wi6k_ebtv.css';
import '../../css/f/f8daxeblb.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="uypib39ja"><path class="wi6k_ebtv"/><path class="f8daxeblb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:typescript-def"} {...others} />);
}

export default Component;
