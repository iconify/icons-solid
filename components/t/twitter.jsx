import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xt3dg-b7s.css';

const viewBox = {"width":1600,"height":1280};
const content = `<path class="xt3dg-b7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:twitter"} {...others} />);
}

export default Component;
