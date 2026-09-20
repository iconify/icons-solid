import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/e/edk05ab4u.css';
import '../../css/l/lgp-8qlsy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="edk05ab4u"/><path class="lgp-8qlsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:align-offset-left-two-tone"} {...others} />);
}

export default Component;
