import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ykgta0_-g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ykgta0_-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:advertisement-line"} {...others} />);
}

export default Component;
