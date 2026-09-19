import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mt9rm4bdd.css';

const viewBox = {"width":1664,"height":1344};
const content = `<path class="mt9rm4bdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:timeslot"} {...others} />);
}

export default Component;
