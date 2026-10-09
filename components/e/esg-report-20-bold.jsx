import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ny-w6qbwa.css';
import '../../css/m/m8tnmwbcg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ny-w6qbwa"/><path class="m8tnmwbcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:esg-report-20-bold"} {...others} />);
}

export default Component;
