import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kdu4ius8f.css';
import '../../css/f/f2gwe7byg.css';
import '../../css/z/zpr52sbwp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kdu4ius8f"/><path class="f2gwe7byg"/><path class="zpr52sbwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:amphora"} {...others} />);
}

export default Component;
