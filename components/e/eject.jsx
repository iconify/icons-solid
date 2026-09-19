import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wb6w09bir.css';
import '../../css/o/o8fo-jx8b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wb6w09bir"/><path class="o8fo-jx8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:eject"} {...others} />);
}

export default Component;
