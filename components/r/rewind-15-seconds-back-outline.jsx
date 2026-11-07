import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gu9c0-57j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gu9c0-57j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rewind-15-seconds-back-outline"} {...others} />);
}

export default Component;
