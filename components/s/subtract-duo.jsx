import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/odcwkzu6r.css';
import '../../css/o/ogasd1kpl.css';
import '../../css/a/aldr43bry.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="odcwkzu6r"/><path class="ogasd1kpl"/><path class="aldr43bry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:subtract-duo"} {...others} />);
}

export default Component;
