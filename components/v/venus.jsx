import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/by0hihb3l.css';

const viewBox = {"width":288,"height":512};
const content = `<path class="by0hihb3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:venus"} {...others} />);
}

export default Component;
