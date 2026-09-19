import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/n3_xkvbyw.css';
import '../../css/f/f8ckzv0yc.css';
import '../../css/p/puubmlblv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="n3_xkvbyw"/><path class="f8ckzv0yc"/><path class="puubmlblv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:export"} {...others} />);
}

export default Component;
