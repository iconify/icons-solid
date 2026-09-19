import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mesj8d27e.css';
import '../../css/d/dfew9rbse.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mesj8d27e"/><path class="dfew9rbse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:watermelon"} {...others} />);
}

export default Component;
