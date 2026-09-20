import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/n/n9peftvhw.css';
import '../../css/n/nieto3bph.css';
import '../../css/n/nbecvubak.css';
import '../../css/a/azo_exbdi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="n9peftvhw"/><path class="nieto3bph"/><path class="nbecvubak"/><path class="azo_exbdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:recycle-bin-2"} {...others} />);
}

export default Component;
