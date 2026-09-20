import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9y5u9bmj.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="d9y5u9bmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-layout-border-none-border-cell-format-formatting-none"} {...others} />);
}

export default Component;
