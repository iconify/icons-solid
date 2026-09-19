import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/b/bxybecbsh.css';
import '../../css/a/ar1f_7a3n.css';
import '../../css/c/cdzqijmof.css';
import '../../css/t/t9--_tbuo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="bxybecbsh"/><path class="ar1f_7a3n"/><path class="cdzqijmof"/><path class="t9--_tbuo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:clothes-pants-short"} {...others} />);
}

export default Component;
