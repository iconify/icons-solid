import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zt6hue7bl.css';
import '../../css/h/h50klb51r.css';
import '../../css/q/q9pd_y20i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zt6hue7bl"/><path class="h50klb51r"/><path clip-rule="evenodd" class="q9pd_y20i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:spark"} {...others} />);
}

export default Component;
