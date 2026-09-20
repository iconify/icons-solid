import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bw5qszl1f.css';
import '../../css/h/h5lbcq9ql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bw5qszl1f"/><path class="h5lbcq9ql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:gas-station"} {...others} />);
}

export default Component;
