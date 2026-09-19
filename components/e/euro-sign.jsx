import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d06n8p3wu.css';

const viewBox = {"width":320,"height":512};
const content = `<path class="d06n8p3wu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:euro-sign"} {...others} />);
}

export default Component;
