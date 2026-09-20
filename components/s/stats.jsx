import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tmhl6tbhb.css';
import '../../css/r/rjpl5yb_a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tmhl6tbhb"/><path class="rjpl5yb_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:stats"} {...others} />);
}

export default Component;
