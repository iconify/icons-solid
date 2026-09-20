import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5r7npblp.css';
import '../../css/y/yxi16mj3g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h5r7npblp"/><path class="yxi16mj3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:1panel-dark"} {...others} />);
}

export default Component;
