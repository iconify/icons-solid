import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zg745ongr.css';
import '../../css/x/xjtf52b4g.css';
import '../../css/e/eifg-8bbb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zg745ongr"/><path class="xjtf52b4g"/><path class="eifg-8bbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:bathroom-solid"} {...others} />);
}

export default Component;
