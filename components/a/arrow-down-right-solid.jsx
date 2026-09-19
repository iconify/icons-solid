import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rw11da53d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rw11da53d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-down-right-solid"} {...others} />);
}

export default Component;
