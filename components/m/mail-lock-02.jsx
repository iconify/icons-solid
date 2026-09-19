import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/ao6q-ib-y.css';
import '../../css/k/k7wjk5a_r.css';
import '../../css/l/l-ubx2v9z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ao6q-ib-y"/><path class="k7wjk5a_r"/><path class="l-ubx2v9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-lock-02"} {...others} />);
}

export default Component;
