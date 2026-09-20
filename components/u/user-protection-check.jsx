import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/o/off80rbwk.css';
import '../../css/w/wcsosyb7y.css';
import '../../css/h/hsh97fb4a.css';
import '../../css/g/g785wwvao.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="off80rbwk"/><path class="wcsosyb7y"/><path class="hsh97fb4a"/><path class="g785wwvao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:user-protection-check"} {...others} />);
}

export default Component;
