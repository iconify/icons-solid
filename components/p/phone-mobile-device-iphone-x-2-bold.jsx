import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdmht6isv.css';
import '../../css/p/p7u7xr6jc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gdmht6isv"/><path class="p7u7xr6jc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:phone-mobile-device-iphone-x-2-bold"} {...others} />);
}

export default Component;
