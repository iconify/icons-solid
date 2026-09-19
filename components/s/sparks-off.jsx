import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcm2tjbsz.css';
import '../../css/d/dz7650h2w.css';
import '../../css/u/uol8h3pbr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vcm2tjbsz"/><path clip-rule="evenodd" class="dz7650h2w"/><path class="uol8h3pbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:sparks-off"} {...others} />);
}

export default Component;
