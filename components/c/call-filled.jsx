import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxl0p-bhp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kxl0p-bhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:call-filled"} {...others} />);
}

export default Component;
