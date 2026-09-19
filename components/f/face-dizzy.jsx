import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ycs9h4bkb.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="ycs9h4bkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-regular:face-dizzy"} {...others} />);
}

export default Component;
