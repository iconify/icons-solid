import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xa3cy-byb.css';
import '../../css/e/e2lawp-2h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xa3cy-byb"/><path class="e2lawp-2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:or-gate-20-bold"} {...others} />);
}

export default Component;
