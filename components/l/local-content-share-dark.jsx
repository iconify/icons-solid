import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1x776i8b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p1x776i8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:local-content-share-dark"} {...others} />);
}

export default Component;
