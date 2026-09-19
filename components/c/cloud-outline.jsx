import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pahppx3dv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pahppx3dv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gridicons:cloud-outline"} {...others} />);
}

export default Component;
