import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jh0zkx8bv.css';
import '../../css/y/yud54w-4w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jh0zkx8bv"/><path class="yud54w-4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-r-open"} {...others} />);
}

export default Component;
