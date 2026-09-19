import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/x/xnjspeamt.css';
import '../../css/k/k8_sv1isi.css';
import '../../css/b/bfx1hxjol.css';
import '../../css/k/kzqq8mwzb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="xnjspeamt"/><path class="k8_sv1isi"/><path class="bfx1hxjol"/><path class="kzqq8mwzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hourglass-null"} {...others} />);
}

export default Component;
