import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_ofi4dze.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x_ofi4dze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mouse-circle-outline"} {...others} />);
}

export default Component;
