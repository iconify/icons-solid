import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wx5vx6b6c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wx5vx6b6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:wall-fuzo-h"} {...others} />);
}

export default Component;
