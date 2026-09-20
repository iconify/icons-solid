import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3gm7cbob.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t3gm7cbob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:tumblr-logo-block"} {...others} />);
}

export default Component;
