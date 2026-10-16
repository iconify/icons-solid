import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jd9tt7pmf.css';
import '../../css/u/uv305zbwv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jd9tt7pmf"/><path class="uv305zbwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:data-pipeline-48-bold"} {...others} />);
}

export default Component;
