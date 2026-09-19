import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y3bs4jbfx.css';
import '../../css/q/qknhedbtq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="edit-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="y3bs4jbfx"/><path class="qknhedbtq"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:edit-outline"} {...others} />);
}

export default Component;
