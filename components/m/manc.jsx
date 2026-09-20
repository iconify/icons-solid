import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/os2j4ybkr.css';
import '../../css/r/r2-u52t_a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="os2j4ybkr"/><path class="r2-u52t_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:manc"} {...others} />);
}

export default Component;
