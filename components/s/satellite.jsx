import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4b_5f5ix.css';
import '../../css/j/je6wlacsi.css';
import '../../css/c/c0ot92bkd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(45 15.49 2.42)" class="k4b_5f5ix"/><rect transform="rotate(45 15.49 2.42)" class="je6wlacsi"/><path class="c0ot92bkd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:satellite"} {...others} />);
}

export default Component;
