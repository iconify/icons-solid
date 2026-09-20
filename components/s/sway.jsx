import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfhguzbcb.css';
import '../../css/f/f_mc5ezfi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jfhguzbcb"/><path class="f_mc5ezfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:sway"} {...others} />);
}

export default Component;
