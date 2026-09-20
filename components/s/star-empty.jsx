import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft1yr5mlj.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="ft1yr5mlj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:star-empty"} {...others} />);
}

export default Component;
