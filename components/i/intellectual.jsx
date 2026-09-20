import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/xkao-zbwh.css';
import '../../css/b/b0o8dgb5h.css';
import '../../css/f/fjz3n__hz.css';
import '../../css/q/qg2an0vyr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="xkao-zbwh"/><path class="b0o8dgb5h"/><path class="fjz3n__hz"/><path class="qg2an0vyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:intellectual"} {...others} />);
}

export default Component;
