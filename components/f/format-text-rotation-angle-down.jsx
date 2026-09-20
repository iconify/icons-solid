import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gn340v__e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gn340v__e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:format-text-rotation-angle-down"} {...others} />);
}

export default Component;
