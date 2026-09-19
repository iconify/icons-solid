import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_jz6jb-u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y_jz6jb-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:leg-outline"} {...others} />);
}

export default Component;
