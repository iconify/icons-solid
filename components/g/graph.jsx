import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/r/rzicbmbnz.css';
import '../../css/v/vkyp9sb1o.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="rzicbmbnz"/><path class="vkyp9sb1o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:graph"} {...others} />);
}

export default Component;
