import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aimb1-8ps.css';
import '../../css/l/lxsosla-d.css';
import '../../css/s/ssaqghbvr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="aimb1-8ps"/><circle class="lxsosla-d"/><path class="ssaqghbvr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:integration"} {...others} />);
}

export default Component;
