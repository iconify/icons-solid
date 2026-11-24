import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5_hjiief.css';
import '../../css/f/fdkgd3bwq.css';
import '../../css/p/pfkyy-b4c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x5_hjiief"/><path class="fdkgd3bwq"/><path class="pfkyy-b4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:germ-off-filled"} {...others} />);
}

export default Component;
