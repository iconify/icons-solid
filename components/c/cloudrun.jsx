import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vmhrr5b1v.css';
import '../../css/z/z3v_axe2j.css';
import '../../css/l/lonnihb8q.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="vmhrr5b1v"/><path class="z3v_axe2j"/><path class="lonnihb8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:cloudrun"} {...others} />);
}

export default Component;
