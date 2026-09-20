import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3kw-3bro.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z3kw-3bro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:frame-filled"} {...others} />);
}

export default Component;
