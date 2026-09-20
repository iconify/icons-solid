import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/d/d0h36taxe.css';
import '../../css/r/rmnh1fbii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="d0h36taxe"/><path class="rmnh1fbii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:mouse-light"} {...others} />);
}

export default Component;
