import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f6abu1bwo.css';
import '../../css/g/gxx26rbco.css';
import '../../css/u/u15oyjf0o.css';
import '../../css/r/ry006sbtj.css';
import '../../css/f/fdlfgp37g.css';
import '../../css/c/cvexepjaw.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="f6abu1bwo"/><path class="gxx26rbco"/><path class="u15oyjf0o"/><path class="ry006sbtj"/><path class="fdlfgp37g"/><path class="cvexepjaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:octopus"} {...others} />);
}

export default Component;
