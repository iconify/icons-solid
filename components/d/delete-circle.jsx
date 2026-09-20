import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xswv0rbkp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xswv0rbkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:delete-circle"} {...others} />);
}

export default Component;
