import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l03o9u8jg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l03o9u8jg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:fish-solid"} {...others} />);
}

export default Component;
