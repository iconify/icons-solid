import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_ep6jbqv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q_ep6jbqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icons8:add-shopping-cart"} {...others} />);
}

export default Component;
