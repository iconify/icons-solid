import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hhvux2gvb.css';
import '../../css/q/q07jkcbuy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hhvux2gvb"/><path class="q07jkcbuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:money-send3"} {...others} />);
}

export default Component;
