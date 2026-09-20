import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxiza7bmd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wxiza7bmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:arrow-big-left"} {...others} />);
}

export default Component;
