import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rs40jpbkq.css';
import '../../css/r/r5w09bcrv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rs40jpbkq"/><path class="r5w09bcrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:note-pencil-stroke-20"} {...others} />);
}

export default Component;
