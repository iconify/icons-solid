import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhjw5tknw.css';
import '../../css/i/ikrzhfb8r.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hhjw5tknw"/><path class="ikrzhfb8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-class-open"} {...others} />);
}

export default Component;
