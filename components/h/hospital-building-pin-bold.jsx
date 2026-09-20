import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7r-vt5ps.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e7r-vt5ps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:hospital-building-pin-bold"} {...others} />);
}

export default Component;
