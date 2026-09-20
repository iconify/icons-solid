import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvyy1sb6d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nvyy1sb6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:layout-bottombar-expand-filled"} {...others} />);
}

export default Component;
