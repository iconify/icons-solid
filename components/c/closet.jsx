import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/flg1mtbtz.css';
import '../../css/o/obd1zrb6n.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="flg1mtbtz"/><path class="obd1zrb6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:closet"} {...others} />);
}

export default Component;
