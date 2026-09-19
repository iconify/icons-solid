import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m7n6j24vy.css';
import '../../css/e/e2kb8cc5n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="clipboard-text-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="m7n6j24vy"/><path class="e2kb8cc5n"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:clipboard-text-outline"} {...others} />);
}

export default Component;
