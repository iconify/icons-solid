import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2ee7r-6v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p2ee7r-6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:docuseal-light"} {...others} />);
}

export default Component;
