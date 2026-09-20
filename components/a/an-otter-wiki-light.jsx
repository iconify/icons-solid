import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/an6zuxdwo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="an6zuxdwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:an-otter-wiki-light"} {...others} />);
}

export default Component;
