import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qk8ftzbyc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qk8ftzbyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:layout-arrow-right-filled"} {...others} />);
}

export default Component;
