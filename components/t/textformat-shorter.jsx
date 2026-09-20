import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/stv8mcy9h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="stv8mcy9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:textformat-shorter"} {...others} />);
}

export default Component;
