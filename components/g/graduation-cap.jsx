import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mlzlh4b_f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mlzlh4b_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:graduation-cap"} {...others} />);
}

export default Component;
