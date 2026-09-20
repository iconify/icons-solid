import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/df5vh9b_c.css';
import '../../css/y/y9p37it8g.css';
import '../../css/s/swts19n6q.css';
import '../../css/d/d3lhv2bby.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="df5vh9b_c"/><path class="y9p37it8g"/><path class="swts19n6q"/><path class="d3lhv2bby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:filter-text"} {...others} />);
}

export default Component;
