import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9frh8pyw.css';
import '../../css/i/i2fpxzbyu.css';
import '../../css/z/z8_xk9jlf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n9frh8pyw"/><path class="i2fpxzbyu"/><path class="z8_xk9jlf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lightning-protection-48-bold"} {...others} />);
}

export default Component;
