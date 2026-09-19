import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejwoc6wpd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ejwoc6wpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:polygon-filled"} {...others} />);
}

export default Component;
