import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g18t66qmd.css';
import '../../css/l/lf_du3q8d.css';
import '../../css/j/jcogv-28d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g18t66qmd"/><path class="lf_du3q8d"/><path class="jcogv-28d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:window-grid"} {...others} />);
}

export default Component;
