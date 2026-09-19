import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7xmh9s8j.css';
import '../../css/f/f2drsob5a.css';
import '../../css/o/onf5sqgqe.css';
import '../../css/f/fnize7bxd.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="y7xmh9s8j"/><path class="f2drsob5a"/><path class="onf5sqgqe"/><path class="fnize7bxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:airplane"} {...others} />);
}

export default Component;
