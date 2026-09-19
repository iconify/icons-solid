import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oump4sbzr.css';
import '../../css/a/a07kpgmwj.css';
import '../../css/y/yip5bw25e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="oump4sbzr"/><path class="a07kpgmwj"/><path clip-rule="evenodd" class="yip5bw25e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:painted-eggshell"} {...others} />);
}

export default Component;
