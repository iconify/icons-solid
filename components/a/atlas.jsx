import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ecsfs2btc.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="ecsfs2btc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:atlas"} {...others} />);
}

export default Component;
