import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/ariiyj0op.css';
import '../../css/g/g0ga7n_6m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="ariiyj0op"/><path class="g0ga7n_6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:rho"} {...others} />);
}

export default Component;
