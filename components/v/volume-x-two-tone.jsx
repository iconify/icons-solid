import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x5ls4k8te.css';
import '../../css/u/uifnjiagg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x5ls4k8te"/><path class="uifnjiagg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:volume-x-two-tone"} {...others} />);
}

export default Component;
