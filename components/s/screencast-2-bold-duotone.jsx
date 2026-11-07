import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/baf92pb0v.css';
import '../../css/o/oxe30nuth.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="baf92pb0v"/><path class="oxe30nuth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:screencast-2-bold-duotone"} {...others} />);
}

export default Component;
