import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lrp0pi-hl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lrp0pi-hl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:list-arrow-up2-filled"} {...others} />);
}

export default Component;
