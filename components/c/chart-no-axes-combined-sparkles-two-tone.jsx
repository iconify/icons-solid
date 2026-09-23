import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x3bv72bvx.css';
import '../../css/t/twtzfeb6g.css';
import '../../css/g/gacmsohwz.css';
import '../../css/v/vs-z1vb4f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x3bv72bvx"/><path class="twtzfeb6g"/><path class="gacmsohwz"/><path class="vs-z1vb4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-no-axes-combined-sparkles-two-tone"} {...others} />);
}

export default Component;
