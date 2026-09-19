import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbx7ydbrp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sbx7ydbrp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hand-pointing-down-04"} {...others} />);
}

export default Component;
