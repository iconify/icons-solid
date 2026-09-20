import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/otjloabio.css';
import '../../css/v/vwzk8pbpk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="otjloabio"/><path class="vwzk8pbpk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:corner-left-up"} {...others} />);
}

export default Component;
