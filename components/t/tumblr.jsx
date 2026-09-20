import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a4qr4-85k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a4qr4-85k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:tumblr"} {...others} />);
}

export default Component;
