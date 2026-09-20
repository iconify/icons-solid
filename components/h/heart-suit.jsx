import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uroqbab3z.css';
import '../../css/d/d23743b9c.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="uroqbab3z"/><path class="d23743b9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:heart-suit"} {...others} />);
}

export default Component;
