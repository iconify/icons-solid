import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p9p3ynbre.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="p9p3ynbre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:pause-outline"} {...others} />);
}

export default Component;
