import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jmv2f3b2c.css';
import '../../css/r/rp05lmnnc.css';
import '../../css/v/v_mzr6b6g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jmv2f3b2c"/><path class="rp05lmnnc"/><path class="v_mzr6b6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:music3"} {...others} />);
}

export default Component;
