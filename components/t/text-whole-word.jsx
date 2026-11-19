import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/eotm-v5hq.css';
import '../../css/k/kfbtf9byb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="eotm-v5hq"/><path class="kfbtf9byb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-whole-word"} {...others} />);
}

export default Component;
