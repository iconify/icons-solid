import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/t/tsy67xnzp.css';
import '../../css/a/azf_o3ixs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="tsy67xnzp"/><path class="azf_o3ixs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arhive-alt-small-light"} {...others} />);
}

export default Component;
