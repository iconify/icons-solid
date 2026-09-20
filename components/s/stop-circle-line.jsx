import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mf2faab1e.css';
import '../../css/u/unpwu6t-d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mf2faab1e"/><path class="unpwu6t-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:stop-circle-line"} {...others} />);
}

export default Component;
