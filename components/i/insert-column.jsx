import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kuvn8txtx.css';
import '../../css/c/ce1q6jn_i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kuvn8txtx"/><path class="ce1q6jn_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:insert-column"} {...others} />);
}

export default Component;
