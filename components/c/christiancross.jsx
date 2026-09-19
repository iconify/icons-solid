import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jq2a-_k6c.css';

const viewBox = {"width":768,"height":1024};
const content = `<path class="jq2a-_k6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:christiancross"} {...others} />);
}

export default Component;
