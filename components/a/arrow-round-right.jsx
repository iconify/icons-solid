import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/b/bh8195-dp.css';
import '../../css/h/hixrr3y3r.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="bh8195-dp"/><path class="hixrr3y3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:arrow-round-right"} {...others} />);
}

export default Component;
