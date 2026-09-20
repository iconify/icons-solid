import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/uwt0q_bjd.css';
import '../../css/n/n8j3ytb6t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="uwt0q_bjd"/><path class="n8j3ytb6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:filter-sharp-two-tone"} {...others} />);
}

export default Component;
