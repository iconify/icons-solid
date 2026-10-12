import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2_8y6pzv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e2_8y6pzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:grid-2x2-x-filled"} {...others} />);
}

export default Component;
