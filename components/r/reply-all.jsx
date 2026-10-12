import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jte_x1boc.css';
import '../../css/u/uybw88ckc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jte_x1boc"/><path class="uybw88ckc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:reply-all"} {...others} />);
}

export default Component;
