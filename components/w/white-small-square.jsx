import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbxb9zycx.css';
import '../../css/u/uu386rb8h.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="nbxb9zycx"/><path class="uu386rb8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:white-small-square"} {...others} />);
}

export default Component;
