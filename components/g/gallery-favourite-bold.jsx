import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9qd5__9z.css';
import '../../css/p/p93a1fbiu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r9qd5__9z"/><path class="p93a1fbiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gallery-favourite-bold"} {...others} />);
}

export default Component;
