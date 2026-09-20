import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g87b65bny.css';
import '../../css/t/t8sx1mbrx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g87b65bny"/><path class="t8sx1mbrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:logo-social-media-tiktok-circle"} {...others} />);
}

export default Component;
