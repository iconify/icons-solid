import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x4f0wqbig.css';
import '../../css/t/thbpo_rra.css';
import '../../css/a/a5r6_ubdb.css';
import '../../css/l/lb-5zac2f.css';
import '../../css/v/v8flibcil.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="x4f0wqbig"/><path class="thbpo_rra"/><path class="a5r6_ubdb"/><path class="lb-5zac2f"/><path class="v8flibcil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:email-action-warning"} {...others} />);
}

export default Component;
