import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zsi-k6tgg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zsi-k6tgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:crunchyroll-light"} {...others} />);
}

export default Component;
