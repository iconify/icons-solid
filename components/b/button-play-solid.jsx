import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3gu8m8ym.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="c3gu8m8ym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:button-play-solid"} {...others} />);
}

export default Component;
