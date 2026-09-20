import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fl5tuzctx.css';
import '../../css/w/wikzv70fk.css';
import '../../css/i/i-w85obzz.css';
import '../../css/k/krmn1jcix.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fl5tuzctx"/><path class="wikzv70fk"/><path class="i-w85obzz"/><path class="krmn1jcix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:logo-social-media-instagram-circle"} {...others} />);
}

export default Component;
