import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6lt7bcvq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k6lt7bcvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hexagon-number-0-filled"} {...others} />);
}

export default Component;
