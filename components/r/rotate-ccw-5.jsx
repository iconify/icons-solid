import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bazxsibde.css';
import '../../css/e/eselt7ksv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bazxsibde"/><path class="eselt7ksv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:rotate-ccw-5"} {...others} />);
}

export default Component;
