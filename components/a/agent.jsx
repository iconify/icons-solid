import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a9hlsb9oy.css';
import '../../css/g/gir26e-6w.css';
import '../../css/m/mnxnmyx7b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="a9hlsb9oy"/><path class="gir26e-6w"/><rect class="mnxnmyx7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:agent"} {...others} />);
}

export default Component;
