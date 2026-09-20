import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7_ca8bkc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i7_ca8bkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uis:head-side-mask"} {...others} />);
}

export default Component;
