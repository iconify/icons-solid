import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qaw7kx8vp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qaw7kx8vp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:layers-alt"} {...others} />);
}

export default Component;
