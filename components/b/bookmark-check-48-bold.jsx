import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7ue9wb8n.css';
import '../../css/s/shuuz6bqy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b7ue9wb8n"/><path class="shuuz6bqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bookmark-check-48-bold"} {...others} />);
}

export default Component;
