import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r18yejbff.css';
import '../../css/q/qmcxffbum.css';
import '../../css/t/twij58b_v.css';
import '../../css/l/l79kylebl.css';
import '../../css/u/uy0hx2qfx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="r18yejbff"/><path class="qmcxffbum"/><path class="twij58b_v"/><path class="l79kylebl"/><path class="uy0hx2qfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:shellcheck"} {...others} />);
}

export default Component;
