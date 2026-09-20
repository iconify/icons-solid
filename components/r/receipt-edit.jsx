import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yjvt5mqru.css';
import '../../css/y/y9njoccth.css';
import '../../css/t/t5kr6cgli.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yjvt5mqru"/><path class="y9njoccth"/><path class="t5kr6cgli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:receipt-edit"} {...others} />);
}

export default Component;
