import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6p030o4c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c6p030o4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:mastodon-logo-1-block"} {...others} />);
}

export default Component;
