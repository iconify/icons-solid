import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/v/vul3t5bdd.css';
import '../../css/x/xi0idpw6x.css';
import '../../css/e/eo6fmmbww.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="vul3t5bdd"/><path class="xi0idpw6x"/><path class="eo6fmmbww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:key"} {...others} />);
}

export default Component;
