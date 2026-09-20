import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/m/mf00s901q.css';
import '../../css/u/u-hkfmxng.css';
import '../../css/u/ur2-_1rdr.css';
import '../../css/f/f7o969gee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="mf00s901q"/><path class="u-hkfmxng"/><path class="ur2-_1rdr"/><path class="f7o969gee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:traffic-light"} {...others} />);
}

export default Component;
