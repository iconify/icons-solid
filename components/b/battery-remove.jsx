import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6-6p29ze.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z6-6p29ze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:battery-remove"} {...others} />);
}

export default Component;
