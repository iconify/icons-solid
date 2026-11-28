import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5xj5rkcz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c5xj5rkcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:prompt-play"} {...others} />);
}

export default Component;
