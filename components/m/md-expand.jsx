import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eu2qbi5aq.css';
import '../../css/a/akqi3gfxw.css';
import '../../css/t/tlaldtb5u.css';
import '../../css/j/jgthw4brg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eu2qbi5aq"/><path class="akqi3gfxw"/><path class="tlaldtb5u"/><path class="jgthw4brg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-expand"} {...others} />);
}

export default Component;
