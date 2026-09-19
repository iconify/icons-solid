import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e1crdphdg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e1crdphdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:trail-sign-sharp"} {...others} />);
}

export default Component;
