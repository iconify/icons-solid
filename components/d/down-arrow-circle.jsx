import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgo18hbkg.css';
import '../../css/h/hd_yihbkn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jgo18hbkg"/><path class="hd_yihbkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:down-arrow-circle"} {...others} />);
}

export default Component;
