import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dg5oj0bkp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dg5oj0bkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:caret-back"} {...others} />);
}

export default Component;
