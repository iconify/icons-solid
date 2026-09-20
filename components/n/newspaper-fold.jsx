import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hfn0eod3i.css';
import '../../css/b/bne_g12ej.css';
import '../../css/l/l44alrbhn.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hfn0eod3i"/><path class="bne_g12ej"/><path class="l44alrbhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:newspaper-fold"} {...others} />);
}

export default Component;
