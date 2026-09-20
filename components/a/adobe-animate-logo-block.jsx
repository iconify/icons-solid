import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sh-974bjo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sh-974bjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:adobe-animate-logo-block"} {...others} />);
}

export default Component;
