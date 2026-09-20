import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/b/b9fa5tbdj.css';
import '../../css/u/uh2amklte.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="b9fa5tbdj"/><path class="uh2amklte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:music-note-trebble-clef"} {...others} />);
}

export default Component;
