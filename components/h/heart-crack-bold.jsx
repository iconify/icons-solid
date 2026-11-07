import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oey6ny_di.css';
import '../../css/u/uv5m79ypg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oey6ny_di"/><path class="uv5m79ypg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:heart-crack-bold"} {...others} />);
}

export default Component;
