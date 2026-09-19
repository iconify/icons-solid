import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/g/gey20ubqc.css';
import '../../css/w/wa4wf2brm.css';
import '../../css/r/r4god8b6l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="gey20ubqc"/><path class="wa4wf2brm"/><path class="r4god8b6l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:briefcase-light"} {...others} />);
}

export default Component;
