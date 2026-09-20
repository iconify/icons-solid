import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7vpdnbmz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c7vpdnbmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:lastfm-logo-block"} {...others} />);
}

export default Component;
