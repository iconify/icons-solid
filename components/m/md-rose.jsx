import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nztsp1ouo.css';
import '../../css/a/a47udl32t.css';
import '../../css/k/kzt8tebac.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nztsp1ouo"/><path class="a47udl32t"/><path class="kzt8tebac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-rose"} {...others} />);
}

export default Component;
