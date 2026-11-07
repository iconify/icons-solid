import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1nbikbny.css';
import '../../css/h/hd3mzwb_t.css';
import '../../css/y/ydzn23buh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="g1nbikbny"/><path class="hd3mzwb_t"/><path class="ydzn23buh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-right-open-bold-duotone"} {...others} />);
}

export default Component;
