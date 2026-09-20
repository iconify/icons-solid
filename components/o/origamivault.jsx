import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xc_489fuj.css';
import '../../css/y/y-q3akb5r.css';
import '../../css/b/b-a-r1bnh.css';
import '../../css/y/yujqbog1q.css';
import '../../css/f/fa4d7_gxx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xc_489fuj"/><path class="y-q3akb5r"/><path class="b-a-r1bnh"/><path class="yujqbog1q"/><path class="fa4d7_gxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:origamivault"} {...others} />);
}

export default Component;
