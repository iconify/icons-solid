import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/opn24tbwg.css';
import '../../css/o/ov--w3k6t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="opn24tbwg"/><path class="ov--w3k6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-price-48-bold"} {...others} />);
}

export default Component;
