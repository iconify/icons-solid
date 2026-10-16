import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxq650zlt.css';
import '../../css/b/b_ayuzlry.css';
import '../../css/q/q3czggb2v.css';
import '../../css/s/sxcnixb6f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mxq650zlt"/><path class="b_ayuzlry"/><path class="q3czggb2v"/><path class="sxcnixb6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cargo-drone-20-bold"} {...others} />);
}

export default Component;
