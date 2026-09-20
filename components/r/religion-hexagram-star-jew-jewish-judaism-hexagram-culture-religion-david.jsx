import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/adzscxzut.css';
import '../../css/p/ptaz8obxi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="adzscxzut"/><path class="ptaz8obxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:religion-hexagram-star-jew-jewish-judaism-hexagram-culture-religion-david"} {...others} />);
}

export default Component;
