import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjqawm_sp.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="xjqawm_sp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:list-add"} {...others} />);
}

export default Component;
