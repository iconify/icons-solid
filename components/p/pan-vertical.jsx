import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5xkkmbxr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c5xkkmbxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:pan-vertical"} {...others} />);
}

export default Component;
