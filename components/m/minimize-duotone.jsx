import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ga9tnceqv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ga9tnceqv primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:minimize-duotone"} {...others} />);
}

export default Component;
