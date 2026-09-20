import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/icy1mzy8b.css';
import '../../css/r/ru9avd0-t.css';
import '../../css/y/y73n-0gfr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="icy1mzy8b"/><path class="ru9avd0-t"/><path class="y73n-0gfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:epik"} {...others} />);
}

export default Component;
