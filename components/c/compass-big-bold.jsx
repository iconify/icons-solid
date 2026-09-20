import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mr4wvub4c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mr4wvub4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:compass-big-bold"} {...others} />);
}

export default Component;
