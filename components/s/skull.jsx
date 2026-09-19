import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h38xtl-6m.css';
import '../../css/z/z3me40b2g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h38xtl-6m"/><path class="z3me40b2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:skull"} {...others} />);
}

export default Component;
