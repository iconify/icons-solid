import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/an6qy8_nf.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="an6qy8_nf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:rectangle-stack-fill-badge-minus"} {...others} />);
}

export default Component;
