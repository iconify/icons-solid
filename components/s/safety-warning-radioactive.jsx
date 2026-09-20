import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/swe-3q-nj.css';
import '../../css/a/aw_5gdmdj.css';
import '../../css/b/bt2b0mbtn.css';
import '../../css/p/phewpi3xx.css';
import '../../css/j/j2s027uzl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="swe-3q-nj"/><path class="aw_5gdmdj"/><path class="bt2b0mbtn"/><path class="phewpi3xx"/><path class="j2s027uzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:safety-warning-radioactive"} {...others} />);
}

export default Component;
