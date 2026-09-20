import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cjqtb6rwi.css';
import '../../css/k/k5pymk42u.css';
import '../../css/j/jwawlch5e.css';
import '../../css/a/a4fp1owbq.css';
import '../../css/d/dz_ijegit.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cjqtb6rwi"/><path class="k5pymk42u"/><path class="jwawlch5e"/><path class="a4fp1owbq"/><path class="dz_ijegit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:down-up"} {...others} />);
}

export default Component;
