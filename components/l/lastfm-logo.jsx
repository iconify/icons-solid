import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qh1sgnwon.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qh1sgnwon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:lastfm-logo"} {...others} />);
}

export default Component;
