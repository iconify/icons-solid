import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_t41-uxm.css';
import '../../css/s/sx1789nbd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="g_t41-uxm"/><path class="sx1789nbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-shared"} {...others} />);
}

export default Component;
