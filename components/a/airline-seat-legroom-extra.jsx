import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xl_3d6bty.css';

const viewBox = {"width":448,"height":384};
const content = `<path class="xl_3d6bty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:airline-seat-legroom-extra"} {...others} />);
}

export default Component;
