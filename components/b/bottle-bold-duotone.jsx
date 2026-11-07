import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ig8ga7b3p.css';
import '../../css/r/r-u6g9bnb.css';
import '../../css/s/s1gudszho.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ig8ga7b3p"/><path class="r-u6g9bnb"/><path class="s1gudszho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bottle-bold-duotone"} {...others} />);
}

export default Component;
