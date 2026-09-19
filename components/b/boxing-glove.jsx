import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b5k2o3wfc.css';
import '../../css/a/amx419yok.css';
import '../../css/a/asllu_tlg.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="b5k2o3wfc"/><path class="amx419yok"/><path class="asllu_tlg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:boxing-glove"} {...others} />);
}

export default Component;
