import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lw0z3v33o.css';
import '../../css/r/ralbey30g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lw0z3v33o"/><path class="ralbey30g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cargo-ship-20-bold"} {...others} />);
}

export default Component;
