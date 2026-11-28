import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kr0y-c_1a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kr0y-c_1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:columns-plus"} {...others} />);
}

export default Component;
