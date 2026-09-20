import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/etbq9abyx.css';
import '../../css/a/avfj2roso.css';
import '../../css/n/nrjfxccnf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="etbq9abyx"/><path class="avfj2roso"/><path class="nrjfxccnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:cursor-2"} {...others} />);
}

export default Component;
