import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t1c8cdcqe.css';
import '../../css/q/q2vmesbkz.css';
import '../../css/u/u-6w6tngj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="t1c8cdcqe"/><rect class="q2vmesbkz"/><path class="u-6w6tngj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:video-minus"} {...others} />);
}

export default Component;
