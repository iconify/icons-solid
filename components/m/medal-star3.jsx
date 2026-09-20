import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uqn0aesut.css';
import '../../css/o/onkqmobiw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uqn0aesut"/><path class="onkqmobiw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:medal-star3"} {...others} />);
}

export default Component;
