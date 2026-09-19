import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qk1uidbkm.css';
import '../../css/i/i191j5bfe.css';
import '../../css/s/sefr00bhg.css';
import '../../css/z/z9p97smkm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qk1uidbkm"/><path class="i191j5bfe"/><path class="sefr00bhg"/><path class="z9p97smkm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:dango"} {...others} />);
}

export default Component;
