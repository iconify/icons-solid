import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b165fgo1d.css';
import '../../css/g/gyrmy3bdq.css';
import '../../css/b/bk3gozb6s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b165fgo1d"/><path class="gyrmy3bdq"/><path class="bk3gozb6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:paginate-filter-2"} {...others} />);
}

export default Component;
