import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w0z0gubss.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w0z0gubss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:skip-previous-circle"} {...others} />);
}

export default Component;
