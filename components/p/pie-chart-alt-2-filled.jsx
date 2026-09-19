import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5aywsbyj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a5aywsbyj b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:pie-chart-alt-2-filled"} {...others} />);
}

export default Component;
