import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ep6z_l59c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ep6z_l59c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:lgbt-friendly"} {...others} />);
}

export default Component;
