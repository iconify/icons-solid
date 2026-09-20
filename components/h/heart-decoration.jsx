import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqv0xpf4a.css';
import '../../css/b/bd4d-6b9d.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/c/cgeqbibxe.css';
import '../../css/n/n8gu1ebhy.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="nqv0xpf4a"/><path class="bd4d-6b9d"/><g class="kdz4acc8r"><path class="cgeqbibxe"/><path class="n8gu1ebhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:heart-decoration"} {...others} />);
}

export default Component;
