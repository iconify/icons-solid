import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nl020ey9a.css';
import '../../css/w/wt121qu2z.css';

const viewBox = {"width":100,"height":100};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nl020ey9a"/><path class="wt121qu2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:background-color"} {...others} />);
}

export default Component;
