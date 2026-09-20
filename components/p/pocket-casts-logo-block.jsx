import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2g0yejfb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w2g0yejfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:pocket-casts-logo-block"} {...others} />);
}

export default Component;
