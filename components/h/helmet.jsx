import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d1ssm0bbx.css';
import '../../css/g/gga26nl5f.css';
import '../../css/j/jh8nxyb3z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="d1ssm0bbx"/><path class="gga26nl5f"/><path class="jh8nxyb3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:helmet"} {...others} />);
}

export default Component;
