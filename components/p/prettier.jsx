import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewbqj8b1z.css';
import '../../css/v/vp-n_ytkf.css';
import '../../css/j/jj-o6fpsq.css';
import '../../css/z/zic0h3bys.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ewbqj8b1z"/><path class="vp-n_ytkf"/><path class="jj-o6fpsq"/><path class="zic0h3bys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:prettier"} {...others} />);
}

export default Component;
