import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi8qeub9j.css';
import '../../css/g/gzw_lcbat.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bi8qeub9j"/><path class="gzw_lcbat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-cafe"} {...others} />);
}

export default Component;
