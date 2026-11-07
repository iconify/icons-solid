import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6gx6-b_c.css';
import '../../css/p/peilol5hf.css';
import '../../css/y/yus7ucc0b.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/o/o-a_llbzv.css';
import '../../css/u/uwjdfvbwa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y6gx6-b_c"/><path clip-rule="evenodd" class="peilol5hf"/><path class="yus7ucc0b"/><g class="xtpeb-edw"><path class="o-a_llbzv"/><path class="uwjdfvbwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:treadmill-bold-duotone"} {...others} />);
}

export default Component;
