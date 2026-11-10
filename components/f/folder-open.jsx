import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n9zo70bzb.css';
import '../../css/r/rdbbxab4u.css';
import '../../css/l/lk9fa_b0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n9zo70bzb"/><path class="rdbbxab4u"/><path class="lk9fa_b0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-open"} {...others} />);
}

export default Component;
