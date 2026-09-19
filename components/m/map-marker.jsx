import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prdpuebmy.css';

const viewBox = {"width":1024,"height":1536};
const content = `<path class="prdpuebmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:map-marker"} {...others} />);
}

export default Component;
