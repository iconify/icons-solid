import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kj3pbrbbe.css';
import '../../css/b/buuk01b0b.css';
import '../../css/o/o82blrbht.css';
import '../../css/m/mgtoy8blj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kj3pbrbbe"/><path class="buuk01b0b"/><path class="o82blrbht"/><path class="mgtoy8blj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:ship-cargo-duotone"} {...others} />);
}

export default Component;
