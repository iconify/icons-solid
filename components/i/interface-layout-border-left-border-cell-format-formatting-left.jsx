import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mnwwpqb8k.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="mnwwpqb8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-layout-border-left-border-cell-format-formatting-left"} {...others} />);
}

export default Component;
