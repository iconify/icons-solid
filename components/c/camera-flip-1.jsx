import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/t2zaifbda.css';
import '../../css/r/rnb8pybkj.css';
import '../../css/l/le33cfb2c.css';
import '../../css/r/r2eztqbdd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="t2zaifbda"/><path class="rnb8pybkj"/><path class="le33cfb2c"/><path class="r2eztqbdd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:camera-flip-1"} {...others} />);
}

export default Component;
