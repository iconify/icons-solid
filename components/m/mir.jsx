import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_-xvvo4a.css';

const viewBox = {"width":224,"height":80,"left":36,"top":112};
const content = `<path class="l_-xvvo4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:mir"} {...others} />);
}

export default Component;
