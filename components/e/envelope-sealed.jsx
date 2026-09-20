import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ok6vmhxfl.css';
import '../../css/y/yon6iwelm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ok6vmhxfl"/><path class="yon6iwelm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:envelope-sealed"} {...others} />);
}

export default Component;
