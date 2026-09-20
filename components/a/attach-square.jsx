import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zd3ncqbfm.css';
import '../../css/r/rvymobzlx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zd3ncqbfm"/><path class="rvymobzlx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:attach-square"} {...others} />);
}

export default Component;
