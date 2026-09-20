import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j1d8v-bos.css';
import '../../css/a/a9nbxkhse.css';
import '../../css/c/cnc8kxp4p.css';
import '../../css/p/p235whbik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="j1d8v-bos"/><circle class="a9nbxkhse"/><circle class="cnc8kxp4p"/><path class="p235whbik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:paw-print"} {...others} />);
}

export default Component;
