import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uqvq7_clu.css';
import '../../css/u/uyikr8bep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uqvq7_clu"/><path class="uyikr8bep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:root"} {...others} />);
}

export default Component;
