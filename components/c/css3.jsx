import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2k97lrgv.css';
import '../../css/m/mu-nzqbjx.css';
import '../../css/f/fipfphbhj.css';
import '../../css/v/vg4bqfbar.css';
import '../../css/e/er8w-absw.css';
import '../../css/z/z-e3lgbld.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="k2k97lrgv"/><path class="mu-nzqbjx"/><path class="fipfphbhj"/><path class="vg4bqfbar"/><path class="er8w-absw"/><path class="z-e3lgbld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:css3"} {...others} />);
}

export default Component;
