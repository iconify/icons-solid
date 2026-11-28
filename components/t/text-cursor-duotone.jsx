import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1xfj5k7t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary r1xfj5k7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:text-cursor-duotone"} {...others} />);
}

export default Component;
