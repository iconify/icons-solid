import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bhhkc0bga.css';
import '../../css/c/chkwti95r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="bhhkc0bga"/><path class="chkwti95r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:new-job"} {...others} />);
}

export default Component;
