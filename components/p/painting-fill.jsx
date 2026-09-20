import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_e1c9-on.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r_e1c9-on"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:painting-fill"} {...others} />);
}

export default Component;
