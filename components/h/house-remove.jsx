import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lgcuh9bxd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lgcuh9bxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:house-remove"} {...others} />);
}

export default Component;
