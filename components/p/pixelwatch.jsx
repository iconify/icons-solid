import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjmmu8bno.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sjmmu8bno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:pixelwatch"} {...others} />);
}

export default Component;
