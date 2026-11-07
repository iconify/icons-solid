import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1nbikbny.css';
import '../../css/l/lq958rfxi.css';
import '../../css/y/yy5pkcb2v.css';
import '../../css/v/vhokyxbgc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="g1nbikbny"/><path class="lq958rfxi"/><path class="yy5pkcb2v"/><path class="vhokyxbgc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-text-right-bold-duotone"} {...others} />);
}

export default Component;
