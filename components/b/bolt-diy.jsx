import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmnb66mry.css';
import '../../css/z/z46nhhf2y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lmnb66mry"/><path class="z46nhhf2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bolt-diy"} {...others} />);
}

export default Component;
