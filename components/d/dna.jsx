import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/v/vi04vkb8g.css';
import '../../css/w/wbsu-9b5l.css';
import '../../css/y/yiecks5xj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="vi04vkb8g"/><path class="wbsu-9b5l"/><path class="yiecks5xj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:dna"} {...others} />);
}

export default Component;
