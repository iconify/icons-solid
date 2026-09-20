import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lu7-xr7bm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lu7-xr7bm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:medium"} {...others} />);
}

export default Component;
