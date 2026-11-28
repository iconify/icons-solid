import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4ewevbuz.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/if_fr7tub.css';
import '../../css/v/vn442-jke.css';
import '../../css/x/x302x6xca.css';
import '../../css/l/lrn0xrqqu.css';
import '../../css/k/kgl9logqp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k4ewevbuz secondary"/><g class="dt0cm9dhy primary"><path class="if_fr7tub"/><path class="vn442-jke"/><path class="x302x6xca"/><path class="lrn0xrqqu"/><path class="kgl9logqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chart-column-stacked-duo"} {...others} />);
}

export default Component;
