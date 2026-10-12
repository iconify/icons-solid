import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p8d9u7bdg.css';
import '../../css/e/eu24tmeaa.css';
import '../../css/b/bd2pqjhnu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p8d9u7bdg"/><path class="eu24tmeaa"/><path class="bd2pqjhnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bell-silent"} {...others} />);
}

export default Component;
