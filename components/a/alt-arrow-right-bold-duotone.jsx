import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6_x9xmbd.css';
import '../../css/c/c-ivyjb8c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f6_x9xmbd"/><path class="c-ivyjb8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:alt-arrow-right-bold-duotone"} {...others} />);
}

export default Component;
