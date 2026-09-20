import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b05ho5hmg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b05ho5hmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:hulu-live-tv-logo"} {...others} />);
}

export default Component;
