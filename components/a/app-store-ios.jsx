import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2pi-7bkl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g2pi-7bkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:app-store-ios"} {...others} />);
}

export default Component;
