import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ihqvv61nw.css';
import '../../css/e/evhc4ehqx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="trending-up-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="ihqvv61nw"/><path class="evhc4ehqx"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:trending-up-outline"} {...others} />);
}

export default Component;
