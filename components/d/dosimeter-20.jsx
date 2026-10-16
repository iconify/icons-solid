import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6veld26c.css';
import '../../css/u/u_6gs2b2x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y6veld26c"/><path class="u_6gs2b2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dosimeter-20"} {...others} />);
}

export default Component;
