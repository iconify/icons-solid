import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozyzan.css';
import '../../css/d/d-zrqjti.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ozyzan"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:play-filled-to-pause-transition"} {...others} />);
}

export default Component;
