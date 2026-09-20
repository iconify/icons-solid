import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prb1s5poo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="prb1s5poo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:play-large-line"} {...others} />);
}

export default Component;
