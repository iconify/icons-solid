import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/il1_u-b0j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="il1_u-b0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:entertainment-events-hobbies-horror-ghost"} {...others} />);
}

export default Component;
