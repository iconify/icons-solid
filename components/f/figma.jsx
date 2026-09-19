import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4028-b3r.css';
import '../../css/t/t5s8-fwfl.css';
import '../../css/a/a6rpd8c1i.css';
import '../../css/d/dyerjlb6g.css';
import '../../css/b/bcl51zb1b.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="i4028-b3r"/><path class="t5s8-fwfl"/><path class="a6rpd8c1i"/><path class="dyerjlb6g"/><path class="bcl51zb1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:figma"} {...others} />);
}

export default Component;
