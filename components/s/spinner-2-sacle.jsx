import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h43-4kifw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h43-4kifw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:spinner-2-sacle"} {...others} />);
}

export default Component;
