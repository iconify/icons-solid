import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h96ml7bnn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h96ml7bnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:dots-horizontal-rounded"} {...others} />);
}

export default Component;
