import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yismpnbbv.css';
import '../../css/p/pddla0b_d.css';
import '../../css/g/gcy3r1rbs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yismpnbbv"/><path clip-rule="evenodd" class="pddla0b_d"/><path class="gcy3r1rbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:building-complex-plus-filled"} {...others} />);
}

export default Component;
