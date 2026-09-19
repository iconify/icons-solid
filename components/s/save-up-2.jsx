import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iy0qri4ae.css';
import '../../css/p/p__g4pb1v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iy0qri4ae"/><path class="p__g4pb1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:save-up-2"} {...others} />);
}

export default Component;
