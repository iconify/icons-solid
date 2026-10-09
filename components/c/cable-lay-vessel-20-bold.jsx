import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c56z29arz.css';
import '../../css/d/dj9nk1b3p.css';
import '../../css/h/hgry93bsw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c56z29arz"/><path class="dj9nk1b3p"/><path class="hgry93bsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cable-lay-vessel-20-bold"} {...others} />);
}

export default Component;
