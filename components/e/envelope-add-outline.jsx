import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5ll95seg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x5ll95seg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:envelope-add-outline"} {...others} />);
}

export default Component;
