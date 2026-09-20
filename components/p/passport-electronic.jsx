import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tou73jsic.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tou73jsic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:passport-electronic"} {...others} />);
}

export default Component;
