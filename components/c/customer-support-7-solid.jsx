import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q60qlub_r.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="q60qlub_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:customer-support-7-solid"} {...others} />);
}

export default Component;
