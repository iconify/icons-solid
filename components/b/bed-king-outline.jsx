import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfkv-rb3c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hfkv-rb3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:bed-king-outline"} {...others} />);
}

export default Component;
