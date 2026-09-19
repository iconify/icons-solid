import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w49j0rbvv.css';
import '../../css/q/q84ioub0h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="bi12bsetm"><path class="w49j0rbvv"/><path class="q84ioub0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:js"} {...others} />);
}

export default Component;
