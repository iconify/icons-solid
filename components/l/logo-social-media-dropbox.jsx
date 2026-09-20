import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5ibnw1da.css';
import '../../css/y/yooxxnacr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="r5ibnw1da"/><path class="yooxxnacr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:logo-social-media-dropbox"} {...others} />);
}

export default Component;
