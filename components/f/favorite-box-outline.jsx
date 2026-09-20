import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ttz056v2c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ttz056v2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:favorite-box-outline"} {...others} />);
}

export default Component;
