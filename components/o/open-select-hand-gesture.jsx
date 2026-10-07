import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/clq6hscjn.css';
import '../../css/w/wjlxmglat.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="clq6hscjn"/><path class="wjlxmglat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:open-select-hand-gesture"} {...others} />);
}

export default Component;
