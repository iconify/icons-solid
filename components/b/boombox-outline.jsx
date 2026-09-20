import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-0pgab_v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o-0pgab_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:boombox-outline"} {...others} />);
}

export default Component;
