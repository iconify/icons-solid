import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l37szz5mg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l37szz5mg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:local-content-share-light"} {...others} />);
}

export default Component;
