import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hss7wl3yw.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="hss7wl3yw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:temple-outline"} {...others} />);
}

export default Component;
