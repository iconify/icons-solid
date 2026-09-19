import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ezz7v9oio.css';
import '../../css/q/qsmi7yamt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ezz7v9oio"/><path class="qsmi7yamt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bitcoin-down-01"} {...others} />);
}

export default Component;
