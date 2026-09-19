import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htlnq8bmb.css';
import '../../css/o/oeu2lyeho.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="htlnq8bmb"/><path class="oeu2lyeho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-in-left-stroke-circle-half-filled"} {...others} />);
}

export default Component;
