import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qne3ze1at.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qne3ze1at"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mermaid-dark"} {...others} />);
}

export default Component;
