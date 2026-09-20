import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dr9n3xn2m.css';
import '../../css/c/cm9npibhp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="dr9n3xn2m"/><path clip-rule="evenodd" class="cm9npibhp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:tall-hat-flat"} {...others} />);
}

export default Component;
