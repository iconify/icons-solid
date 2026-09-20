import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/q/qdeua8o8d.css';
import '../../css/g/gpa15w4nl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="qdeua8o8d"/><path class="gpa15w4nl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:500px-logo-2"} {...others} />);
}

export default Component;
