import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cdp4dpb7d.css';
import '../../css/x/xl1uujblh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cdp4dpb7d"/><path class="xl1uujblh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:currency-ils"} {...others} />);
}

export default Component;
