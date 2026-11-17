import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lj3bq3_bb.css';
import '../../css/q/qw98xtb2r.css';
import '../../css/z/zue-gtm4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lj3bq3_bb"/><rect class="qw98xtb2r"/><rect class="zue-gtm4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:stroke-width"} {...others} />);
}

export default Component;
