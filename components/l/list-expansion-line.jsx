import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-40_z1ey.css';
import '../../css/t/td92ekb3h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r-40_z1ey"/><path class="td92ekb3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:list-expansion-line"} {...others} />);
}

export default Component;
