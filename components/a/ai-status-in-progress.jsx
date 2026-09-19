import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rw3u8dcyu.css';
import '../../css/s/s3bjnib6t.css';
import '../../css/u/uyfynbbwi.css';
import '../../css/e/e5f-_gbbc.css';
import '../../css/b/bpmd7mglb.css';
import '../../css/d/d3uh6cy-d.css';
import '../../css/g/g-keuubov.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rw3u8dcyu"/><path class="s3bjnib6t"/><path class="uyfynbbwi"/><path class="e5f-_gbbc"/><circle class="bpmd7mglb"/><circle class="d3uh6cy-d"/><circle class="g-keuubov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ai-status-in-progress"} {...others} />);
}

export default Component;
