import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eoon22kar.css';
import '../../css/m/m-kckroos.css';
import '../../css/q/q1lth85bf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="eoon22kar"/><path class="m-kckroos"/><path class="q1lth85bf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-pump-20"} {...others} />);
}

export default Component;
