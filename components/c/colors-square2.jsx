import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s1yet0cyf.css';
import '../../css/d/di-sq0b4x.css';
import '../../css/l/lylwz-bed.css';
import '../../css/r/rvymobzlx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s1yet0cyf"/><path class="di-sq0b4x"/><path class="lylwz-bed"/><path class="rvymobzlx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:colors-square2"} {...others} />);
}

export default Component;
