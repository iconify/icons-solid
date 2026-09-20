import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqxl8rbrp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sqxl8rbrp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:speed-alt"} {...others} />);
}

export default Component;
