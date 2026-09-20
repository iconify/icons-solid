import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v220aebru.css';
import '../../css/d/dar05kv8d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v220aebru"/><path class="dar05kv8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:venus-fill"} {...others} />);
}

export default Component;
