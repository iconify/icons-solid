import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3ztewbfh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z4sa4nigm.css';
import '../../css/p/ppoyyub2b.css';
import '../../css/n/n1lvnpb3w.css';
import '../../css/e/evr6dx0yp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e3ztewbfh secondary"/><g class="dt0cm9dhy primary"><path class="z4sa4nigm"/><path class="ppoyyub2b"/><path class="n1lvnpb3w"/><path class="evr6dx0yp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:spray-can-duo"} {...others} />);
}

export default Component;
