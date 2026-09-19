import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjn5kuzfw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sjn5kuzfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:piano-grand"} {...others} />);
}

export default Component;
