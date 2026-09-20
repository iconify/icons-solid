import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/v/v_3l7ibkm.css';
import '../../css/l/ltg4u5wmd.css';
import '../../css/l/l6j5z2wol.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="v_3l7ibkm"/><path class="ltg4u5wmd"/><path class="l6j5z2wol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:plant-1"} {...others} />);
}

export default Component;
