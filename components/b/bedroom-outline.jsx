import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbkpbobbs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rbkpbobbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:bedroom-outline"} {...others} />);
}

export default Component;
