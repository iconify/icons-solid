import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m7_o1pbil.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m7_o1pbil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:sailboat-solid"} {...others} />);
}

export default Component;
