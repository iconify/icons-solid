import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/ho18gccjz.css';
import '../../css/w/wpfc0c76o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ho18gccjz"/><path class="wpfc0c76o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:dollar-square"} {...others} />);
}

export default Component;
