import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_u3a2y6v.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="r_u3a2y6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-layout-border-bottom-border-bottom-cell-format-formatting"} {...others} />);
}

export default Component;
