import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rf35kd9hh.css';
import '../../css/u/ui2c-mkkt.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="rf35kd9hh"/><path class="ui2c-mkkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:shopping-cart"} {...others} />);
}

export default Component;
