import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x97ijfbkk.css';
import '../../css/j/jy-0-ba4q.css';
import '../../css/d/dheiwnbom.css';

const viewBox = {"width":304,"height":182};
const content = `<path class="x97ijfbkk"/><path class="jy-0-ba4q"/><path class="dheiwnbom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:amazon-web-services-light"} {...others} />);
}

export default Component;
