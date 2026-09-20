import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lb5d0xh1n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lb5d0xh1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:mastodon-logo-3-solid"} {...others} />);
}

export default Component;
