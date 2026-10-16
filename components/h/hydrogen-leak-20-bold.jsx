import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rm8o83l5u.css';
import '../../css/a/ajmi_0bqu.css';
import '../../css/d/djpikibkr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rm8o83l5u"/><path class="ajmi_0bqu"/><path class="djpikibkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-leak-20-bold"} {...others} />);
}

export default Component;
