import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p0x4ts1te.css';
import '../../css/f/ftc5ble5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p0x4ts1te"/><path class="ftc5ble5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:microscope"} {...others} />);
}

export default Component;
