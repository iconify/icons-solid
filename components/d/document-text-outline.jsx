import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/ti1j9ac6u.css';
import '../../css/j/j-tx4b2sa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="document-text-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="ti1j9ac6u"/><path class="j-tx4b2sa"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:document-text-outline"} {...others} />);
}

export default Component;
