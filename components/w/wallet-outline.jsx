import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g95e799uz.css';
import '../../css/v/vpo1j0hds.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g95e799uz"/><path clip-rule="evenodd" class="vpo1j0hds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:wallet-outline"} {...others} />);
}

export default Component;
