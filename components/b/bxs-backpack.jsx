import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l25j-x-4p.css';
import '../../css/z/z-9vsgwta.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l25j-x-4p"/><path class="z-9vsgwta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-backpack"} {...others} />);
}

export default Component;
