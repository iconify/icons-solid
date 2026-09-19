import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yapyn4bzj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yapyn4bzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:bulb-par-38"} {...others} />);
}

export default Component;
