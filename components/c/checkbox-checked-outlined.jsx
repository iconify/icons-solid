import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pu3c7wbmz.css';
import '../../css/y/y8nllnb_t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="checkbox-checked-outlined"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="pu3c7wbmz"/><path class="y8nllnb_t"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:checkbox-checked-outlined"} {...others} />);
}

export default Component;
