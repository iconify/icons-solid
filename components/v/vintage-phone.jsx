import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xwau0o0rk.css';
import '../../css/b/bm85-cegf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xwau0o0rk"/><path class="bm85-cegf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:vintage-phone"} {...others} />);
}

export default Component;
