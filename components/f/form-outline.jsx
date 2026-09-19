import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ceiehxfky.css';
import '../../css/v/v3pjvgp8g.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ceiehxfky"/><path class="v3pjvgp8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:form-outline"} {...others} />);
}

export default Component;
