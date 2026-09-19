import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hcqpgct8o.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hcqpgct8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:bar-chart-fill-16"} {...others} />);
}

export default Component;
