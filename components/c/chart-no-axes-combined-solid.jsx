import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ln20xme9d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ln20xme9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:chart-no-axes-combined-solid"} {...others} />);
}

export default Component;
