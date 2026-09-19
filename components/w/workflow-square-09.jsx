import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qp7r8c1tv.css';
import '../../css/y/y9mfijbgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qp7r8c1tv"/><path class="y9mfijbgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:workflow-square-09"} {...others} />);
}

export default Component;
