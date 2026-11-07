import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-jtagb-z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="h-jtagb-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-outline"} {...others} />);
}

export default Component;
