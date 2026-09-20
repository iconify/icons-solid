import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jhhwf3bsv.css';
import '../../css/t/tloqhdbbp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><ellipse class="jhhwf3bsv"/><path class="tloqhdbbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:at-sign"} {...others} />);
}

export default Component;
