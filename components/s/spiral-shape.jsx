import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/i/i61-5eu8p.css';
import '../../css/k/kq4m03ben.css';
import '../../css/f/fihkqhbur.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="i61-5eu8p"/><path class="kq4m03ben"/><path class="fihkqhbur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:spiral-shape"} {...others} />);
}

export default Component;
