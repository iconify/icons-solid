import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h811tfbzn.css';
import '../../css/y/yet1yl0tb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h811tfbzn"/><path class="yet1yl0tb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:battery-full4"} {...others} />);
}

export default Component;
