import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ux8qg05no.css';
import '../../css/h/h5axdgb9d.css';
import '../../css/y/ypap8qjbo.css';
import '../../css/c/c0nufobsu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ux8qg05no"/><path class="h5axdgb9d"/><path clip-rule="evenodd" class="ypap8qjbo"/><path class="c0nufobsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:right-facing-fist-light"} {...others} />);
}

export default Component;
