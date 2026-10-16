import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ugyrrbclb.css';
import '../../css/i/is89d5tfh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ugyrrbclb"/><path class="is89d5tfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:list-reload"} {...others} />);
}

export default Component;
