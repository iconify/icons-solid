import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nw5ln_smg.css';
import '../../css/u/uoncq9b4s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nw5ln_smg"/><path class="uoncq9b4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:3d-light"} {...others} />);
}

export default Component;
