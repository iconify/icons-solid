import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q85exbg4c.css';
import '../../css/s/sy0-p47dz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q85exbg4c"/><path class="sy0-p47dz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:screwdriver-20"} {...others} />);
}

export default Component;
