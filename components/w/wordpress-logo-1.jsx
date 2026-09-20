import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/q/qgn9_pbni.css';
import '../../css/g/gw65b6i-q.css';
import '../../css/j/j697l3uzc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="qgn9_pbni"/><path class="gw65b6i-q"/><path class="j697l3uzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:wordpress-logo-1"} {...others} />);
}

export default Component;
