import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tt_r8ccrc.css';
import '../../css/t/tdc8sp8bz.css';
import '../../css/n/nkkhqzxyi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tt_r8ccrc"/><path class="tdc8sp8bz"/><path class="nkkhqzxyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:map-route-planning-filled"} {...others} />);
}

export default Component;
