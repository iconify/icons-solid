import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnwv1pbqs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rnwv1pbqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:pie-chart-50"} {...others} />);
}

export default Component;
