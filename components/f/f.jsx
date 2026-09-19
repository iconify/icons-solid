import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0uaombwa.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="v0uaombwa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:f"} {...others} />);
}

export default Component;
