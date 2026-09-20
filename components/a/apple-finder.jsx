import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spdrh7b8d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="spdrh7b8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:apple-finder"} {...others} />);
}

export default Component;
