import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/astguezjt.css';
import '../../css/m/m9cbxbbqp.css';
import '../../css/q/qi32o3t-t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="astguezjt"/><path class="m9cbxbbqp"/><path class="qi32o3t-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:crossedflags"} {...others} />);
}

export default Component;
