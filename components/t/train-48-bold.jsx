import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmcricc-j.css';
import '../../css/i/i90rnaccf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pmcricc-j"/><path class="i90rnaccf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:train-48-bold"} {...others} />);
}

export default Component;
