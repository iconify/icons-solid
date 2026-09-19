import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y8d3bcc7x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y8d3bcc7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:bluetooth-fill"} {...others} />);
}

export default Component;
