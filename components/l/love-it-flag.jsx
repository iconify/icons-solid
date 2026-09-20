import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b8zo_n2sm.css';
import '../../css/a/aoz4tdbhh.css';
import '../../css/o/oz6qd1b4z.css';
import '../../css/n/nqf3_hgwg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b8zo_n2sm"/><path class="aoz4tdbhh"/><path class="oz6qd1b4z"/><path class="nqf3_hgwg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:love-it-flag"} {...others} />);
}

export default Component;
