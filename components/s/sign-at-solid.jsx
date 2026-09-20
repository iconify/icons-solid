import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/knsk67hid.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="knsk67hid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:sign-at-solid"} {...others} />);
}

export default Component;
