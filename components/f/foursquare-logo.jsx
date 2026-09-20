import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/e/elessrqlm.css';
import '../../css/u/uzepf-b5p.css';
import '../../css/g/ggpmihe8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="elessrqlm"/><path class="uzepf-b5p"/><path class="ggpmihe8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:foursquare-logo"} {...others} />);
}

export default Component;
