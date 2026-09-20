import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gq4wbcy9u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gq4wbcy9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:rotate-3d"} {...others} />);
}

export default Component;
