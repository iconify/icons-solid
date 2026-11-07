import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ln-p1pbos.css';
import '../../css/p/p8jcaxb6g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ln-p1pbos"/><path class="p8jcaxb6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chair-bold-duotone"} {...others} />);
}

export default Component;
