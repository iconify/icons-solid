import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/j/jl8syi2ma.css';
import '../../css/z/z5a5a0vtn.css';
import '../../css/s/spkm7oolo.css';
import '../../css/g/guj17g94v.css';
import '../../css/w/wyd-ylb3w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="jl8syi2ma"/><path class="z5a5a0vtn"/><path class="spkm7oolo"/><path class="guj17g94v"/><path class="wyd-ylb3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:waves-right"} {...others} />);
}

export default Component;
