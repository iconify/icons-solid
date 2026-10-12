import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/km-s25uct.css';
import '../../css/g/g5o4zccob.css';
import '../../css/z/zrb5eurrl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="km-s25uct"/><rect transform="rotate(90 19 19)" class="g5o4zccob"/><path class="zrb5eurrl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chess-pawn"} {...others} />);
}

export default Component;
