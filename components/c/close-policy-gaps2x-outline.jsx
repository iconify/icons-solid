import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ms0tiaczv.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="ms0tiaczv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:close-policy-gaps2x-outline"} {...others} />);
}

export default Component;
