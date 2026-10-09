import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rd7xtmwmp.css';
import '../../css/v/v33j91b-f.css';
import '../../css/w/wo9nd_b1u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rd7xtmwmp"/><path class="v33j91b-f"/><path class="wo9nd_b1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cable-landing-20"} {...others} />);
}

export default Component;
