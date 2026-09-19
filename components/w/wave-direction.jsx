import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9r4z__4k.css';
import '../../css/z/z8e8kub5u.css';
import '../../css/g/gq7xqhlwu.css';
import '../../css/o/o6k2-ibor.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f9r4z__4k"/><path class="z8e8kub5u"/><circle class="gq7xqhlwu"/><path class="o6k2-ibor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:wave-direction"} {...others} />);
}

export default Component;
