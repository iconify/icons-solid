import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t3b-_98gh.css';
import '../../css/g/gmfx_9bqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="mail-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="t3b-_98gh"/><path class="gmfx_9bqe"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:mail-outline"} {...others} />);
}

export default Component;
