import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g4b3--kmd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g4b3--kmd primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:scan-box-duotone"} {...others} />);
}

export default Component;
