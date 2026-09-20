import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4z6z2bit.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x4z6z2bit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:developer-board"} {...others} />);
}

export default Component;
