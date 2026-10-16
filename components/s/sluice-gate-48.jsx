import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmzb4zr4b.css';
import '../../css/l/lbvcveb9f.css';
import '../../css/z/z2zx3vbyw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hmzb4zr4b"/><path class="lbvcveb9f"/><path class="z2zx3vbyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sluice-gate-48"} {...others} />);
}

export default Component;
