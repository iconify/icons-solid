import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y17d--b1p.css';
import '../../css/u/u2-ilg5vn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y17d--b1p"/><path class="u2-ilg5vn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-log-in"} {...others} />);
}

export default Component;
