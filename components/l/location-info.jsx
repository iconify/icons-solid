import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ld2931_iv.css';
import '../../css/s/s9ab3vb3q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ld2931_iv"/><path class="s9ab3vb3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:location-info"} {...others} />);
}

export default Component;
