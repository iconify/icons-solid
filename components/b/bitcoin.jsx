import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e3hfdmyvm.css';
import '../../css/e/e53dr11tv.css';
import '../../css/b/bqrd_rbvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="e3hfdmyvm"/><path class="e53dr11tv"/><path class="bqrd_rbvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:bitcoin"} {...others} />);
}

export default Component;
