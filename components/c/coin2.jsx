import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wu8sl1cyn.css';
import '../../css/s/sz1xotiyd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wu8sl1cyn"/><path class="sz1xotiyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:coin2"} {...others} />);
}

export default Component;
