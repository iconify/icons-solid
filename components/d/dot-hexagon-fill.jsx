import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ip1i3acfa.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="ip1i3acfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:dot-hexagon-fill"} {...others} />);
}

export default Component;
