import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ofg3t4b1p.css';
import '../../css/b/b64l0dbmf.css';
import '../../css/f/fj9t29bka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ofg3t4b1p"/><path class="b64l0dbmf"/><path class="fj9t29bka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:rotate-camera-right"} {...others} />);
}

export default Component;
