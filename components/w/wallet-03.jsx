import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qzg5up68n.css';
import '../../css/t/tvwr4rb_t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qzg5up68n"/><path class="tvwr4rb_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wallet-03"} {...others} />);
}

export default Component;
