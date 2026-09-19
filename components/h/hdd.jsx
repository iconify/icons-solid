import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z6d4kgwdz.css';
import '../../css/j/jt42kebit.css';
import '../../css/e/ezw1i52ew.css';
import '../../css/t/thwemd3eh.css';
import '../../css/j/jmj9c6abz.css';
import '../../css/c/czd5gefvr.css';
import '../../css/m/m53j51vnc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="z6d4kgwdz"/><circle class="jt42kebit"/><circle class="ezw1i52ew"/><circle class="thwemd3eh"/><circle class="jmj9c6abz"/><path class="czd5gefvr"/><path class="m53j51vnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hdd"} {...others} />);
}

export default Component;
