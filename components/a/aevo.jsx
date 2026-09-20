import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcocwydqh.css';
import '../../css/p/pf56m4b3o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vcocwydqh"/><path clip-rule="evenodd" class="pf56m4b3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:aevo"} {...others} />);
}

export default Component;
