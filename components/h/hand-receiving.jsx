import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rp203napy.css';
import '../../css/y/y4b0m0bhs.css';
import '../../css/d/dlpta8rcu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="rp203napy"/><path class="y4b0m0bhs"/><rect class="dlpta8rcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hand-receiving"} {...others} />);
}

export default Component;
