import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b44k8z_9l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b44k8z_9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:iobroker"} {...others} />);
}

export default Component;
