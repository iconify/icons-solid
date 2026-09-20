import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ret1j0k_b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ret1j0k_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:circle-chevrons-down-filled"} {...others} />);
}

export default Component;
