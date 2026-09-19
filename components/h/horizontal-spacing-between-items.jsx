import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/w/wa2legb6c.css';
import '../../css/q/qst3jj07t.css';
import '../../css/r/rwvujus5f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="wa2legb6c"/><path class="qst3jj07t"/><path class="rwvujus5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:horizontal-spacing-between-items"} {...others} />);
}

export default Component;
