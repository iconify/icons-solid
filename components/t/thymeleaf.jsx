import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zh95h3b6d.css';
import '../../css/g/g1w9e8beh.css';
import '../../css/y/yp8fbucri.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="zh95h3b6d"/><path class="g1w9e8beh"/><path class="yp8fbucri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:thymeleaf"} {...others} />);
}

export default Component;
