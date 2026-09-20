import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewgx1ek3d.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="ewgx1ek3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:compass-east-arrow"} {...others} />);
}

export default Component;
