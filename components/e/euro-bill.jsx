import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pu6q1ctkb.css';

const viewBox = {"width":512,"height":448};
const content = `<path class="pu6q1ctkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:euro-bill"} {...others} />);
}

export default Component;
