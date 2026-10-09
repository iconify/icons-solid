import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ag0bvbcgf.css';
import '../../css/g/gampl1_hh.css';
import '../../css/b/b0z-l4tfm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ag0bvbcgf"/><path class="gampl1_hh"/><path class="b0z-l4tfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cable-landing-20-bold"} {...others} />);
}

export default Component;
