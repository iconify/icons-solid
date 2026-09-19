import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t6msj_99i.css';
import '../../css/o/omw6tjsqe.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><path class="t6msj_99i"/><path class="omw6tjsqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:headphones"} {...others} />);
}

export default Component;
