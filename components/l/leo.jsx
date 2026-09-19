import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y09q59brp.css';
import '../../css/m/md286fbip.css';
import '../../css/a/aowrtub-i.css';
import '../../css/n/nza-bib9m.css';
import '../../css/p/ptp3ddc6o.css';
import '../../css/z/zxbr-ebju.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="y09q59brp"/><g class="md286fbip"><path class="aowrtub-i"/><path class="nza-bib9m"/><path class="ptp3ddc6o"/><path class="zxbr-ebju"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:leo"} {...others} />);
}

export default Component;
