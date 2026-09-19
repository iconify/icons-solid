import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a4440_d1z.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="a4440_d1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:yes"} {...others} />);
}

export default Component;
