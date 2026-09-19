import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qs82pv97p.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qs82pv97p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:check-sm-stroke-16"} {...others} />);
}

export default Component;
