import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ov8walbuy.css';
import '../../css/f/fwj4s1b_m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ov8walbuy"/><path clip-rule="evenodd" class="fwj4s1b_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:wallet-detailed-fill"} {...others} />);
}

export default Component;
