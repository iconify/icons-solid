import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x67q9nqkx.css';
import '../../css/b/b_626lm5f.css';
import '../../css/j/jc1o0db0c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 21.21 12.09)" class="x67q9nqkx"/><rect transform="matrix(0 -1 -1 0 21.21 21.26)" class="b_626lm5f"/><path class="jc1o0db0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:panels-top"} {...others} />);
}

export default Component;
