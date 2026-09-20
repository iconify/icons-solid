import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fhqwuubkk.css';
import '../../css/g/g6dz7kb2h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fhqwuubkk"/><path class="g6dz7kb2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bag-shopping"} {...others} />);
}

export default Component;
