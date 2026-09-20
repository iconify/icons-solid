import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpwy8-brx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tpwy8-brx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:server-add-outline"} {...others} />);
}

export default Component;
