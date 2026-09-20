import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szu_-8m4p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="szu_-8m4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:conduwuit-dark"} {...others} />);
}

export default Component;
