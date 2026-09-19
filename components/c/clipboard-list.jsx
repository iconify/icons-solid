import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oc-dtnblr.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="oc-dtnblr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:clipboard-list"} {...others} />);
}

export default Component;
