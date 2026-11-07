import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yp6su4bex.css';
import '../../css/p/potfbbb8v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yp6su4bex"/><path clip-rule="evenodd" class="potfbbb8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mention-circle-bold"} {...others} />);
}

export default Component;
