import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/i/ig2ey3bqd.css';
import '../../css/l/le4z27b5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="ig2ey3bqd"/><path class="le4z27b5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:gold"} {...others} />);
}

export default Component;
