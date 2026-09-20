import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jyw85fihm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jyw85fihm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:ellipsis-h"} {...others} />);
}

export default Component;
