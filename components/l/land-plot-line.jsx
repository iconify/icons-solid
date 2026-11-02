import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eclf4bb-e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eclf4bb-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:land-plot-line"} {...others} />);
}

export default Component;
