import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/w/w5jk5bbzu.css';
import '../../css/w/won96xb8r.css';
import '../../css/o/o82xrvr8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="w5jk5bbzu"/><path class="won96xb8r"/><path class="o82xrvr8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:fork-plate"} {...others} />);
}

export default Component;
