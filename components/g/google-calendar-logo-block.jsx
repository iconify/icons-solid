import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ok93i9baq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ok93i9baq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-calendar-logo-block"} {...others} />);
}

export default Component;
