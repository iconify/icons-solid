import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gbytk1gwj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gbytk1gwj primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:nodes-cycle-duotone"} {...others} />);
}

export default Component;
