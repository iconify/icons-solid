import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jcr-_t1sf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jcr-_t1sf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ease-out-control-point"} {...others} />);
}

export default Component;
