import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywnaxmbog.css';
import '../../css/z/zaqxs8bvn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ywnaxmbog"/><path clip-rule="evenodd" class="zaqxs8bvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:meditation-bold"} {...others} />);
}

export default Component;
