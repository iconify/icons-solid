import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eg8wz0m-g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="eg8wz0m-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:logo-wikipedia"} {...others} />);
}

export default Component;
