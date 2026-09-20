import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dr2cjhjmr.css';
import '../../css/o/o0m1gzsmz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dr2cjhjmr"/><path class="o0m1gzsmz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:ram2"} {...others} />);
}

export default Component;
