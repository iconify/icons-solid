import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrxhsjmcx.css';
import '../../css/v/v4t3l6h1j.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yrxhsjmcx"/><path clip-rule="evenodd" class="v4t3l6h1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:ui-panel-left-16"} {...others} />);
}

export default Component;
