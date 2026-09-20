import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9ljs0bzh.css';

const viewBox = {"width":800,"height":800,"left":100,"top":100};
const content = `<path class="z9ljs0bzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:rollup"} {...others} />);
}

export default Component;
