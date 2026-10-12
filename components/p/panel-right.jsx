import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-ycy4b-u.css';
import '../../css/h/hywic8b2t.css';
import '../../css/l/laj57ww4v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(1 0 0 -1 14.65 21.18)" class="a-ycy4b-u"/><rect transform="matrix(1 0 0 -1 2.74 21.18)" class="hywic8b2t"/><path class="laj57ww4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:panel-right"} {...others} />);
}

export default Component;
