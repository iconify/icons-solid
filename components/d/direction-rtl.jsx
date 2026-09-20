import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gd4a16fbn.css';

const viewBox = {"width":25,"height":25};
const content = `<path class="gd4a16fbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:direction-rtl"} {...others} />);
}

export default Component;
