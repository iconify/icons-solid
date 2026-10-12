import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nhbpusbsw.css';
import '../../css/f/fnqp5ja6e.css';
import '../../css/r/rhc-rgb9d.css';
import '../../css/k/kyx974bkf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nhbpusbsw"/><path class="fnqp5ja6e"/><path class="rhc-rgb9d"/><path class="kyx974bkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:brain-sparkle"} {...others} />);
}

export default Component;
