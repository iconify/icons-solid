import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ke5mo2bsg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ke5mo2bsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:slider-horizontal2-filled"} {...others} />);
}

export default Component;
