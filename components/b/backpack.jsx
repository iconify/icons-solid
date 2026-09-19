import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/y/ykjtyv7xu.css';
import '../../css/t/teqwvjb9e.css';
import '../../css/u/uoq52nbhb.css';
import '../../css/i/ivg8khb4x.css';
import '../../css/s/snia_tbkz.css';
import '../../css/s/srazykbyu.css';
import '../../css/z/zovskd46w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="ykjtyv7xu"/><path class="teqwvjb9e"/><path class="uoq52nbhb"/><path class="ivg8khb4x"/><path class="snia_tbkz"/><path class="srazykbyu"/><path class="zovskd46w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:backpack"} {...others} />);
}

export default Component;
