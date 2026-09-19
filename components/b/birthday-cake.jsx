import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hyjf33b5p.css';

const viewBox = {"width":1792,"height":1792};
const content = `<path class="hyjf33b5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:birthday-cake"} {...others} />);
}

export default Component;
