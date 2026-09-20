import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3u869byd.css';
import '../../css/a/ad-jgcc6y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j3u869byd"/><path class="ad-jgcc6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:godot"} {...others} />);
}

export default Component;
