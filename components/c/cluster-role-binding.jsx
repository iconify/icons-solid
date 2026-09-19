import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kc8h-9bvi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kc8h-9bvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:cluster-role-binding"} {...others} />);
}

export default Component;
