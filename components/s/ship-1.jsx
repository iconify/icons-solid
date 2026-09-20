import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7g6_3buu.css';
import '../../css/g/g-6_fbosi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z7g6_3buu"/><path class="g-6_fbosi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:ship-1"} {...others} />);
}

export default Component;
