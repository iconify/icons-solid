import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/mkiqobcsx.css';
import '../../css/c/ck21i476d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="mkiqobcsx"/><path class="ck21i476d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:double-down"} {...others} />);
}

export default Component;
