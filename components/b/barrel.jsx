import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bqr8nebgy.css';
import '../../css/u/u687f56vq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bqr8nebgy"/><path class="u687f56vq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:barrel"} {...others} />);
}

export default Component;
