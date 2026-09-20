import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p8xv4ht1h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="p8xv4ht1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:star-badge-solid"} {...others} />);
}

export default Component;
