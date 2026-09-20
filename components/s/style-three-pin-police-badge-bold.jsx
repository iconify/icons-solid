import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iorwqwvhh.css';
import '../../css/g/ggtpew6cj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iorwqwvhh"/><path class="ggtpew6cj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:style-three-pin-police-badge-bold"} {...others} />);
}

export default Component;
