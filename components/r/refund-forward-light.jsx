import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzdv-6b0b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tzdv-6b0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:refund-forward-light"} {...others} />);
}

export default Component;
