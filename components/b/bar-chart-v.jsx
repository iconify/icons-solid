import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvd31abxp.css';
import '../../css/e/e-1c61b7o.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nvd31abxp"/><path class="e-1c61b7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:bar-chart-v"} {...others} />);
}

export default Component;
