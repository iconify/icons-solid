import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/daghqi9jq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="daghqi9jq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:instagram-dark"} {...others} />);
}

export default Component;
