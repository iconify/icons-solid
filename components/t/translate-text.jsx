import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezfumgw-x.css';
import '../../css/d/du_qk9urg.css';
import '../../css/f/fyja8cb5b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ezfumgw-x"><path class="du_qk9urg"/><path class="fyja8cb5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:translate-text"} {...others} />);
}

export default Component;
