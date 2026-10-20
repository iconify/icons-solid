import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvpkry_-f.css';
import '../../css/m/m3d6pw-jx.css';

const viewBox = {"width":55.4,"height":48};
const content = `<path class="kvpkry_-f"/><path class="m3d6pw-jx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:workos-dark"} {...others} />);
}

export default Component;
