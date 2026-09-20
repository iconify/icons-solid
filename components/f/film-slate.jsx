import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/a/anbdll-bb.css';
import '../../css/u/u5v4_zbzv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="anbdll-bb"/><path class="u5v4_zbzv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:film-slate"} {...others} />);
}

export default Component;
