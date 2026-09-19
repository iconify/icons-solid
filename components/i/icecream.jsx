import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/i/i4qf59b1a.css';
import '../../css/f/fanud-8su.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="i4qf59b1a"/><path class="fanud-8su"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:icecream"} {...others} />);
}

export default Component;
