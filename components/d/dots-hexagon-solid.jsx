import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ot32r4bbb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ot32r4bbb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:dots-hexagon-solid"} {...others} />);
}

export default Component;
