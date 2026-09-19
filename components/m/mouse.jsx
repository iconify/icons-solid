import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xk-i8_1pm.css';

const viewBox = {"width":705,"height":1024};
const content = `<path class="xk-i8_1pm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:mouse"} {...others} />);
}

export default Component;
