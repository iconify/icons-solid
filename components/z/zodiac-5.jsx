import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/q/q7g9oyb_i.css';
import '../../css/g/gmt7imbfn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="q7g9oyb_i"/><path class="gmt7imbfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:zodiac-5"} {...others} />);
}

export default Component;
