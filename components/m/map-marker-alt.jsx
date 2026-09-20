import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nuu8vi88c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nuu8vi88c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:map-marker-alt"} {...others} />);
}

export default Component;
