import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivmqp4-dh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ivmqp4-dh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:user-minus-solid"} {...others} />);
}

export default Component;
