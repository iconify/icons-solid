import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/z/znz9u0yza.css';
import '../../css/q/ql-rjq2yk.css';
import '../../css/z/zohk_jbtu.css';
import '../../css/i/iri9qh9-t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="znz9u0yza"/><path class="ql-rjq2yk"/><path class="zohk_jbtu"/><path class="iri9qh9-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pound-sign"} {...others} />);
}

export default Component;
