import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xa4mtmvgo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xa4mtmvgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:owncast-light"} {...others} />);
}

export default Component;
