import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2937lufr.css';
import '../../css/v/vz7kdz1fb.css';
import '../../css/z/z1-af-bwe.css';
import '../../css/y/yiagsukzx.css';
import '../../css/f/fsm6edcal.css';
import '../../css/c/chnbh0b2d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i2937lufr"/><path class="vz7kdz1fb"/><path class="z1-af-bwe"/><path class="yiagsukzx"/><path class="fsm6edcal"/><path class="chnbh0b2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-bold"} {...others} />);
}

export default Component;
