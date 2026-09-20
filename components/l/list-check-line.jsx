import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eowd5-4tk.css';
import '../../css/k/kc1ovsb_n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eowd5-4tk"/><path class="kc1ovsb_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:list-check-line"} {...others} />);
}

export default Component;
