import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qe97cg-lx.css';
import '../../css/l/l-b3iobrb.css';
import '../../css/f/f0mlzybpd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qe97cg-lx"/><rect class="l-b3iobrb"/><rect class="f0mlzybpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:bar-chart-big"} {...others} />);
}

export default Component;
