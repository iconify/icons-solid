import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bva-u7fvx.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="bva-u7fvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:u1faaa-small"} {...others} />);
}

export default Component;
