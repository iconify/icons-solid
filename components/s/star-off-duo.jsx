import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7ce9qpex.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t0ut8sbjx.css';
import '../../css/i/iayx1qbsp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e7ce9qpex secondary"/><g class="dt0cm9dhy primary"><path class="t0ut8sbjx"/><path class="iayx1qbsp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:star-off-duo"} {...others} />);
}

export default Component;
