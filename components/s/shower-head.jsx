import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/sboli8e2u.css';
import '../../css/o/opxuyt77v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="sboli8e2u"/><path class="opxuyt77v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:shower-head"} {...others} />);
}

export default Component;
