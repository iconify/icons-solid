import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/iuc1ubbdx.css';
import '../../css/r/rghfr16fb.css';
import '../../css/n/n43c5c_uz.css';
import '../../css/d/d0d5awmqw.css';
import '../../css/k/km32tqb6i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="iuc1ubbdx"/><path class="rghfr16fb"/><path class="n43c5c_uz"/><path class="d0d5awmqw"/><path class="km32tqb6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:office-worker"} {...others} />);
}

export default Component;
