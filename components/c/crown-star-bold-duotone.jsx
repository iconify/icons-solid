import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zq8bxxi9p.css';
import '../../css/i/iads9dnva.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zq8bxxi9p"/><path class="iads9dnva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:crown-star-bold-duotone"} {...others} />);
}

export default Component;
