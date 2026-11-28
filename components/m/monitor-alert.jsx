import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s72dk49og.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s72dk49og"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:monitor-alert"} {...others} />);
}

export default Component;
