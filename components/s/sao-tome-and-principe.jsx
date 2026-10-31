import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq301s8ar.css';
import '../../css/q/q29bstbxv.css';
import '../../css/p/p9wivw-rv.css';
import '../../css/t/t-r1be3eu.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="wq301s8ar"/><path class="q29bstbxv"/><path class="p9wivw-rv"/><path class="t-r1be3eu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:sao-tome-and-principe"} {...others} />);
}

export default Component;
