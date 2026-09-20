import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ufpb8bcvx.css';
import '../../css/f/f890v1bjh.css';
import '../../css/r/ras_6395g.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ufpb8bcvx"/><path class="f890v1bjh"/><path class="ras_6395g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:shield-check"} {...others} />);
}

export default Component;
