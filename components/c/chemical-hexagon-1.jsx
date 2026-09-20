import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/c/c60z1zbhc.css';
import '../../css/i/ilswne8-p.css';
import '../../css/w/w37c0mbky.css';
import '../../css/d/d-wthpbnq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="c60z1zbhc"/><path class="ilswne8-p"/><path class="w37c0mbky"/><path class="d-wthpbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:chemical-hexagon-1"} {...others} />);
}

export default Component;
