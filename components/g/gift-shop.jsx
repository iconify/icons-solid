import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8sg5frzo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q8sg5frzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:gift-shop"} {...others} />);
}

export default Component;
