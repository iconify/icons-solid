import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eu221abpe.css';
import '../../css/r/r4hkkkb6r.css';
import '../../css/i/iq67862zl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eu221abpe"/><path class="r4hkkkb6r"/><path class="iq67862zl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:acorn"} {...others} />);
}

export default Component;
