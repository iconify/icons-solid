import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iyc7oevht.css';
import '../../css/a/abs0vhb6t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iyc7oevht"/><path clip-rule="evenodd" class="abs0vhb6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wallet-2-outline"} {...others} />);
}

export default Component;
