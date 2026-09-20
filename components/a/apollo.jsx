import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2zgibcpm.css';
import '../../css/z/zsaa8-ecz.css';
import '../../css/k/ku7tdocas.css';
import '../../css/l/lm00rvpau.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="u2zgibcpm"/><circle class="zsaa8-ecz"/><path class="ku7tdocas"/><path class="lm00rvpau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:apollo"} {...others} />);
}

export default Component;
