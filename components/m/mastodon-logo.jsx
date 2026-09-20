import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8n-h5bnb.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="z8n-h5bnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:mastodon-logo"} {...others} />);
}

export default Component;
