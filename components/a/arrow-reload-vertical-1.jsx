import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n289phbfh.css';
import '../../css/l/lrh8l26vj.css';
import '../../css/a/akqahh3wn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="n289phbfh"/><path class="lrh8l26vj"/><path class="akqahh3wn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:arrow-reload-vertical-1"} {...others} />);
}

export default Component;
