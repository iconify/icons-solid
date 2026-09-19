import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xu6r7n82p.css';

const viewBox = {"width":512,"height":448};
const content = `<path class="xu6r7n82p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:daft-punk"} {...others} />);
}

export default Component;
