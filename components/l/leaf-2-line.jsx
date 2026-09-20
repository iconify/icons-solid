import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzqmbeoxz.css';
import '../../css/b/bve3o65en.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uzqmbeoxz"/><path class="bve3o65en"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:leaf-2-line"} {...others} />);
}

export default Component;
