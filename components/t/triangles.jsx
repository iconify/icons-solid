import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eii5rb1fx.css';
import '../../css/s/svm5jq_fp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="eii5rb1fx"/><path class="svm5jq_fp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:triangles"} {...others} />);
}

export default Component;
