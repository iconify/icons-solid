import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zidfd5b0r.css';
import '../../css/w/wb4b4ktjg.css';
import '../../css/t/tgdoe1bss.css';
import '../../css/c/cbokru48w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zidfd5b0r"/><path class="wb4b4ktjg"/><path class="tgdoe1bss"/><path class="cbokru48w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:archivebox"} {...others} />);
}

export default Component;
