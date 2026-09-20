import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxth97d7b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cxth97d7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:covid-exclamation-line"} {...others} />);
}

export default Component;
