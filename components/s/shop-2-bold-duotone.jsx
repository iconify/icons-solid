import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/souitub5j.css';
import '../../css/z/zfnhitbjm.css';
import '../../css/w/w4akaab9h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="souitub5j"/><path class="zfnhitbjm"/><path clip-rule="evenodd" class="w4akaab9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shop-2-bold-duotone"} {...others} />);
}

export default Component;
