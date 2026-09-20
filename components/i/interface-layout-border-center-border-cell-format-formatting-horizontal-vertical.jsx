import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mimal_bwc.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="mimal_bwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-layout-border-center-border-cell-format-formatting-horizontal-vertical"} {...others} />);
}

export default Component;
