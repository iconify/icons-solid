import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aw5x7wlrr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aw5x7wlrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:ban-outline"} {...others} />);
}

export default Component;
