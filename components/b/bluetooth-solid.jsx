import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lte55sbsm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lte55sbsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:bluetooth-solid"} {...others} />);
}

export default Component;
