import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/udnplub3j.css';
import '../../css/g/gsvrl7yuk.css';
import '../../css/o/oy96xogod.css';
import '../../css/h/hxs3abczo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="udnplub3j"/><path class="gsvrl7yuk"/><path class="oy96xogod"/><circle class="hxs3abczo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:house-map-pin"} {...others} />);
}

export default Component;
