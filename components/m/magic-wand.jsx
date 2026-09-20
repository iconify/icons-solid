import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfbl64bcr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lfbl64bcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:magic-wand"} {...others} />);
}

export default Component;
