import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zf6zsz37f.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="zf6zsz37f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:expand-arrows-alt"} {...others} />);
}

export default Component;
