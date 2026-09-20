import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6gw00hkt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z6gw00hkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:mastodon-logo-3-block"} {...others} />);
}

export default Component;
