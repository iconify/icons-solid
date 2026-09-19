import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4v9by9zz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n4v9by9zz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:chart-line-stacked2x-outline"} {...others} />);
}

export default Component;
