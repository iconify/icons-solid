import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/n/n0s9jvo3d.css';
import '../../css/h/h7y8_cc6w.css';
import '../../css/a/a4ytcjd1h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="n0s9jvo3d"/><path class="h7y8_cc6w"/><path class="a4ytcjd1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:device-database-encryption-1"} {...others} />);
}

export default Component;
