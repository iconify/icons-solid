import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv5dr-k_t.css';
import '../../css/a/azsb-3b3g.css';
import '../../css/l/lsqlywp6f.css';
import '../../css/n/ntku73gpx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="sv5dr-k_t"/><path class="azsb-3b3g"/><path class="lsqlywp6f"/><path class="ntku73gpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:design-layer"} {...others} />);
}

export default Component;
