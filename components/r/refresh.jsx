import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/ajr-mbblo.css';
import '../../css/s/sx2kkgt5q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ajr-mbblo"/><path class="sx2kkgt5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:refresh"} {...others} />);
}

export default Component;
