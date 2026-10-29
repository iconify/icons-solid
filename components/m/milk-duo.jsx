import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/drvjwaboq.css';
import '../../css/n/neusriboq.css';
import '../../css/n/nhm3kcoqx.css';
import '../../css/o/ovzt3sbip.css';
import '../../css/u/uf07sqbew.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="drvjwaboq"/><path class="neusriboq wm-a"/><path class="nhm3kcoqx"/><path class="ovzt3sbip"/><path class="uf07sqbew wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:milk-duo"} {...others} />);
}

export default Component;
