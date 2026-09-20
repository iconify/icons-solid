import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g4tjj3_pn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g4tjj3_pn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:shop-complete"} {...others} />);
}

export default Component;
