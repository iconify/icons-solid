import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6o6plple.css';
import '../../css/q/q7t23dnix.css';
import '../../css/n/nop6cvc4u.css';
import '../../css/i/i8q51abek.css';
import '../../css/t/ti1b56bbu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="h6o6plple"/><path class="q7t23dnix"/><path class="nop6cvc4u"/><path class="i8q51abek"/><path class="ti1b56bbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-shrink-4"} {...others} />);
}

export default Component;
