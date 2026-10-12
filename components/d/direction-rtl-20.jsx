import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eba7bgh4x.css';
import '../../css/k/k-8fhdbia.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="eba7bgh4x"/><path class="k-8fhdbia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:direction-rtl-20"} {...others} />);
}

export default Component;
