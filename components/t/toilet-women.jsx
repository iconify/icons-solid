import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/o/ocpacb1ae.css';
import '../../css/j/j2gitabte.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="ocpacb1ae"/><path class="j2gitabte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:toilet-women"} {...others} />);
}

export default Component;
