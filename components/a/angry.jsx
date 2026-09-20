import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/y/yujhm0l1u.css';
import '../../css/r/r2dhyablu.css';
import '../../css/r/r37wzc_th.css';
import '../../css/g/g_5lohbcu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><circle class="yujhm0l1u"/><path class="r2dhyablu"/><circle class="r37wzc_th"/><circle class="g_5lohbcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:angry"} {...others} />);
}

export default Component;
