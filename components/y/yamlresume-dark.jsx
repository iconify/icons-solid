import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqpg8_bbx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cqpg8_bbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:yamlresume-dark"} {...others} />);
}

export default Component;
