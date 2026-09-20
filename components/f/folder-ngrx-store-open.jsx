import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohx99ybum.css';
import '../../css/p/pvasu6b8z.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ohx99ybum"/><path class="pvasu6b8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-ngrx-store-open"} {...others} />);
}

export default Component;
