import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bo0x7ob7m.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="bo0x7ob7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:text-overflow"} {...others} />);
}

export default Component;
