import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a8_bgfbci.css';
import '../../css/c/chokxfb8u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a8_bgfbci"/><path class="chokxfb8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:personal-hygiene-hand-sanitizer-liquid-3"} {...others} />);
}

export default Component;
