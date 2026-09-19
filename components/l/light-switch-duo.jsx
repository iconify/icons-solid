import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oixycubyj.css';
import '../../css/t/tmbuc6btd.css';
import '../../css/v/vhjlelb7g.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="oixycubyj"/><path class="tmbuc6btd"/><path class="vhjlelb7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:light-switch-duo"} {...others} />);
}

export default Component;
