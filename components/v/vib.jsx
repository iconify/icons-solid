import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fuw8l2b8i.css';
import '../../css/g/gfgsw55so.css';
import '../../css/t/tb7rv_ivn.css';
import '../../css/n/n_sx7rycv.css';

const viewBox = {"width":1397,"height":632};
const content = `<path class="fuw8l2b8i"/><path class="gfgsw55so"/><path class="tb7rv_ivn"/><path class="n_sx7rycv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:vib"} {...others} />);
}

export default Component;
