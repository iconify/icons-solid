import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzm4hubxj.css';
import '../../css/p/px297bcje.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xzm4hubxj"/><path class="px297bcje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:store"} {...others} />);
}

export default Component;
