import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qvctme32x.css';
import '../../css/k/kssxw1plt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qvctme32x"/><path class="kssxw1plt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-case-snake"} {...others} />);
}

export default Component;
