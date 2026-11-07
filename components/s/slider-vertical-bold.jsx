import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yq81qobph.css';
import '../../css/c/cp8pj3bmi.css';
import '../../css/z/zv5zc6bto.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yq81qobph"/><path class="cp8pj3bmi"/><path class="zv5zc6bto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:slider-vertical-bold"} {...others} />);
}

export default Component;
