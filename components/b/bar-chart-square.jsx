import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ax_p4nbzc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ax_p4nbzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:bar-chart-square"} {...others} />);
}

export default Component;
