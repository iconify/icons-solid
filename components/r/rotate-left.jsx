import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/s/sqzlrabeh.css';
import '../../css/u/ulo30bb1e.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="sqzlrabeh"/><path class="ulo30bb1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:rotate-left"} {...others} />);
}

export default Component;
