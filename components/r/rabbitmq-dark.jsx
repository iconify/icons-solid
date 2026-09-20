import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ch-9y_2zg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ch-9y_2zg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rabbitmq-dark"} {...others} />);
}

export default Component;
