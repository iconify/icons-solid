import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/w_vlwsr9u.css';
import '../../css/q/q1vhaj3yj.css';
import '../../css/w/w-d2nkbrf.css';
import '../../css/g/gv-pruq2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="w_vlwsr9u wm-shadow"/><path class="q1vhaj3yj wm-shadow"/><path class="w-d2nkbrf"/><path class="gv-pruq2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:shankh"} {...others} />);
}

export default Component;
