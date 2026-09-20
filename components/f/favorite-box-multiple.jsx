import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cd-qr3i-f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cd-qr3i-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:favorite-box-multiple"} {...others} />);
}

export default Component;
