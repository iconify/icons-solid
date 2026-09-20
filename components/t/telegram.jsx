import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gphxlac4x.css';
import '../../css/k/k5rc8zisb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gphxlac4x"/><path class="k5rc8zisb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:telegram"} {...others} />);
}

export default Component;
