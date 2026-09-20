import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vw34_3bgw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vw34_3bgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:computer-laptop-solid"} {...others} />);
}

export default Component;
