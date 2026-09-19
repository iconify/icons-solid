import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fx2hbdw_u.css';

const viewBox = {"width":1792,"height":1792};
const content = `<path class="fx2hbdw_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:6-square"} {...others} />);
}

export default Component;
