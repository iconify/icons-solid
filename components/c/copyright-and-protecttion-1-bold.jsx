import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmdsdab3x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nmdsdab3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:copyright-and-protecttion-1-bold"} {...others} />);
}

export default Component;
