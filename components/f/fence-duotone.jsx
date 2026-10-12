import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a4gyq6a4f.css';
import '../../css/o/oyi6v4b7q.css';
import '../../css/s/s78kz7brn.css';
import '../../css/c/c_bjunb0o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a4gyq6a4f"/><path class="oyi6v4b7q"/><path class="s78kz7brn"/><path class="c_bjunb0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:fence-duotone"} {...others} />);
}

export default Component;
