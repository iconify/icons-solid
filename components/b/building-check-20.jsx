import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1kol59_x.css';
import '../../css/w/wk-mpkb0v.css';
import '../../css/g/g3z_62mfz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h1kol59_x"/><path class="wk-mpkb0v"/><path class="g3z_62mfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:building-check-20"} {...others} />);
}

export default Component;
