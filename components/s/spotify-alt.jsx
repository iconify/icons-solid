import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqjoz67jv.css';
import '../../css/g/gwcmzd5cl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sqjoz67jv"/><path clip-rule="evenodd" class="gwcmzd5cl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:spotify-alt"} {...others} />);
}

export default Component;
