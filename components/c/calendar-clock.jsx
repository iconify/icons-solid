import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/flqpksb2m.css';
import '../../css/j/jbsgy-7xg.css';
import '../../css/f/fqe-cmx_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="flqpksb2m"/><path class="jbsgy-7xg"/><path class="fqe-cmx_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:calendar-clock"} {...others} />);
}

export default Component;
