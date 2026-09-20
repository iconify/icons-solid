import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z6re8rbyg.css';
import '../../css/c/c8g3qn12o.css';
import '../../css/r/rn_2rcb1r.css';
import '../../css/e/enkc5xb3x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z6re8rbyg"/><path class="c8g3qn12o"/><path class="rn_2rcb1r"/><path class="enkc5xb3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:music-square"} {...others} />);
}

export default Component;
