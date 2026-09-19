import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yjhtbdckh.css';
import '../../css/a/a7ajif61p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yjhtbdckh"/><circle class="a7ajif61p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:eye-outline"} {...others} />);
}

export default Component;
