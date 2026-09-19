import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nq44ds2pu.css';
import '../../css/z/zdxf-6bfs.css';
import '../../css/v/vwi-_q-kl.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="nq44ds2pu"/><path class="zdxf-6bfs"/><path class="vwi-_q-kl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:container-engine"} {...others} />);
}

export default Component;
