import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0xvr4gta.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary z0xvr4gta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:mouse-pointer-duotone"} {...others} />);
}

export default Component;
