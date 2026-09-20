import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/ww1-onlbh.css';
import '../../css/u/ugp3wpbyq.css';
import '../../css/l/lyxb831wv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ww1-onlbh"/><path class="ugp3wpbyq"/><path class="lyxb831wv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:select-all"} {...others} />);
}

export default Component;
