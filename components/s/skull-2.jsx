import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/zqaj_9bwa.css';
import '../../css/p/pn6-4jb6j.css';
import '../../css/x/x_z7i22sw.css';
import '../../css/k/kb-9i9byf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="zqaj_9bwa"/><path class="pn6-4jb6j"/><path class="x_z7i22sw"/><path class="kb-9i9byf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:skull-2"} {...others} />);
}

export default Component;
