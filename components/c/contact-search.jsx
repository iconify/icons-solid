import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rn7xp_b-q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rn7xp_b-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:contact-search"} {...others} />);
}

export default Component;
