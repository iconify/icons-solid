import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mdpbzkbzp.css';
import '../../css/x/xurqj-2iq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mdpbzkbzp"/><path class="xurqj-2iq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-heading-three"} {...others} />);
}

export default Component;
