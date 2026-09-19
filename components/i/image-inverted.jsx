import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ky2eltbtn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ky2eltbtn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:image-inverted"} {...others} />);
}

export default Component;
