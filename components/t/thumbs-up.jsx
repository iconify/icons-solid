import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ha9sq_r2u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ha9sq_r2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:thumbs-up"} {...others} />);
}

export default Component;
