import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9mgzabny.css';
import '../../css/p/p0dsglbia.css';
import '../../css/u/uj8cponlm.css';
import '../../css/u/u2ephhbrf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k9mgzabny"/><path class="p0dsglbia"/><path class="uj8cponlm"/><path class="u2ephhbrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:vacuum-20"} {...others} />);
}

export default Component;
