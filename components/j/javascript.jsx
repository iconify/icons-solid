import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/el376fjhw.css';
import '../../css/p/pvs43e5ny.css';

const viewBox = {"width":1052,"height":1052};
const content = `<path class="el376fjhw"/><path class="pvs43e5ny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:javascript"} {...others} />);
}

export default Component;
