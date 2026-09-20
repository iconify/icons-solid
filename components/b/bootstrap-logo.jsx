import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/m/mbnm3kbpl.css';
import '../../css/m/moj7v6btg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="mbnm3kbpl"/><path class="moj7v6btg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:bootstrap-logo"} {...others} />);
}

export default Component;
