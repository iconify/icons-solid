import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eg9qh-kkg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eg9qh-kkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nyt-spelling-bee-dark"} {...others} />);
}

export default Component;
