import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n3mzholuj.css';
import '../../css/z/zhwtiz8vd.css';
import '../../css/c/cgrx-_bdd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="n3mzholuj"/><path class="zhwtiz8vd"/><path class="cgrx-_bdd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:coming-soon-01"} {...others} />);
}

export default Component;
