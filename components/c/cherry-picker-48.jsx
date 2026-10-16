import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvqwjdbok.css';
import '../../css/f/fb99aacni.css';
import '../../css/c/c-5-uyb3i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nvqwjdbok"/><path class="fb99aacni"/><path class="c-5-uyb3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cherry-picker-48"} {...others} />);
}

export default Component;
