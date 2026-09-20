import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yypun9-bb.css';
import '../../css/e/eugqk4bjh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yypun9-bb"/><path class="eugqk4bjh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:skip-forward-duotone"} {...others} />);
}

export default Component;
