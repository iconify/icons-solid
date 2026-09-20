import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az4bd8-8i.css';
import '../../css/o/o8sjs0bqd.css';
import '../../css/g/gnp6kfbzj.css';
import '../../css/x/x_s_tccmn.css';
import '../../css/l/l0_ax0ejf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="az4bd8-8i"/><path class="o8sjs0bqd"/><path class="gnp6kfbzj"/><path class="x_s_tccmn"/><path class="l0_ax0ejf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bidz"} {...others} />);
}

export default Component;
