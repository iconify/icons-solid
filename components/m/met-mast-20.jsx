import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wn4zoubux.css';
import '../../css/w/wlwzuyb0k.css';
import '../../css/r/rv76zfbuo.css';
import '../../css/f/fzro0d78h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wn4zoubux"/><path class="wlwzuyb0k"/><path class="rv76zfbuo"/><path class="fzro0d78h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:met-mast-20"} {...others} />);
}

export default Component;
