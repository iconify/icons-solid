import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvsb-2b0n.css';
import '../../css/n/nbh4wzn0v.css';
import '../../css/g/gu86148fg.css';
import '../../css/e/ensolhbqc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hvsb-2b0n"/><path class="nbh4wzn0v"/><path class="gu86148fg"/><path class="ensolhbqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wire-stripper-20-bold"} {...others} />);
}

export default Component;
