import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp1h63bmv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gp1h63bmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:heart-box"} {...others} />);
}

export default Component;
