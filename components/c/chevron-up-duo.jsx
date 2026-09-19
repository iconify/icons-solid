import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5z2_x_sp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o5z2_x_sp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:chevron-up-duo"} {...others} />);
}

export default Component;
