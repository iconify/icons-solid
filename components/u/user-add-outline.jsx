import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xc9_4i9cf.css';
import '../../css/t/t4sptf3kw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="user-add-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="xc9_4i9cf"/><path class="t4sptf3kw"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:user-add-outline"} {...others} />);
}

export default Component;
