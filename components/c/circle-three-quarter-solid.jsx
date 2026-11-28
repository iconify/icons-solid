import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xd68rr0ny.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xd68rr0ny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:circle-three-quarter-solid"} {...others} />);
}

export default Component;
