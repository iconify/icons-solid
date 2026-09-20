import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f_g7khbgm.css';
import '../../css/v/vmhtj-b2z.css';
import '../../css/k/kvy_b5bib.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="f_g7khbgm"/><path class="vmhtj-b2z"/><path class="kvy_b5bib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:currency-euro-dollar-exchange"} {...others} />);
}

export default Component;
