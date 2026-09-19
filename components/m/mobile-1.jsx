import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhadlj53g.css';
import '../../css/d/dake0_b6v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rhadlj53g"/><path class="dake0_b6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:mobile-1"} {...others} />);
}

export default Component;
