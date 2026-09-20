import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsbipqluu.css';
import '../../css/m/m723m1bzf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lsbipqluu"/><path clip-rule="evenodd" class="m723m1bzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:check-in-circle-empty"} {...others} />);
}

export default Component;
