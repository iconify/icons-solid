import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amo1dubnj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="amo1dubnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:person-walking-solid"} {...others} />);
}

export default Component;
