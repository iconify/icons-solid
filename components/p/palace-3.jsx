import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ng7xchbrq.css';
import '../../css/d/d3h638b2w.css';
import '../../css/n/nndbuccry.css';
import '../../css/x/x46v9abcp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ng7xchbrq"/><path class="d3h638b2w"/><path class="nndbuccry"/><path class="x46v9abcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:palace-3"} {...others} />);
}

export default Component;
