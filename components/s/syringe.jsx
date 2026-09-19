import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ev7fw9bzl.css';
import '../../css/p/pmjredcwv.css';
import '../../css/y/ymp9twb7b.css';
import '../../css/d/dqf9rfonk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ev7fw9bzl"/><path class="pmjredcwv"/><path class="ymp9twb7b"/><path class="dqf9rfonk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:syringe"} {...others} />);
}

export default Component;
