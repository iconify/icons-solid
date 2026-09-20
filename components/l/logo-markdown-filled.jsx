import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ko23__bbc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ko23__bbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:logo-markdown-filled"} {...others} />);
}

export default Component;
