import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wb-w5f2ro.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wb-w5f2ro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:text-box-edit"} {...others} />);
}

export default Component;
