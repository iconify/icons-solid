import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/aa0wmq5ja.css';
import '../../css/r/rdujlubva.css';
import '../../css/m/mzk___bch.css';
import '../../css/o/o4varmbwk.css';
import '../../css/z/zkiovpu_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="aa0wmq5ja wm-shadow"/><path class="rdujlubva wm-shadow"/><path class="mzk___bch"/><path class="o4varmbwk"/><path class="zkiovpu_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:text-cursor-input"} {...others} />);
}

export default Component;
