import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u23o9ub-l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u23o9ub-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:holosphere"} {...others} />);
}

export default Component;
