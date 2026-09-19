import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_eu7vqxz.css';
import '../../css/l/l-ctnfbtr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r_eu7vqxz"/><path class="l-ctnfbtr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:emoji"} {...others} />);
}

export default Component;
