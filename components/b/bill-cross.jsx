import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m528fvbyl.css';
import '../../css/d/d8g94_bnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m528fvbyl"/><path class="d8g94_bnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:bill-cross"} {...others} />);
}

export default Component;
