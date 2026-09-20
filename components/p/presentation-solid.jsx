import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrv9ke-ph.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qrv9ke-ph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:presentation-solid"} {...others} />);
}

export default Component;
