import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kv2s_thge.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="kv2s_thge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:crossing-markings-lines-paired"} {...others} />);
}

export default Component;
