import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9xtyybbm.css';
import '../../css/a/alxwr1l7c.css';
import '../../css/x/xn7sace2l.css';

const viewBox = {"width":200,"height":200};
const content = `<g class="v9xtyybbm"><path class="alxwr1l7c"/><path class="xn7sace2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:idris"} {...others} />);
}

export default Component;
