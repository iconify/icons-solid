import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gy4-pm1pa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gy4-pm1pa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo-social:behance"} {...others} />);
}

export default Component;
