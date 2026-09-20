import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/z/zgvi69bqw.css';
import '../../css/l/lhg8gtbzi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="zgvi69bqw"/><path class="lhg8gtbzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:rotate-angle-45"} {...others} />);
}

export default Component;
