import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/noooh880u.css';
import '../../css/m/mj3_1freo.css';
import '../../css/f/f4svcbcqf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="noooh880u"/><path class="mj3_1freo"/><path class="f4svcbcqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:cloud-with-rain"} {...others} />);
}

export default Component;
