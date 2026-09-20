import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9wzftb8q.css';
import '../../css/u/ukny4u-mq.css';
import '../../css/v/v2yh4c2xt.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="w9wzftb8q"/><path class="ukny4u-mq"/><path class="v2yh4c2xt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:raising-hands-medium-light-skin-tone"} {...others} />);
}

export default Component;
