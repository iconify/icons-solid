import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7raadesu.css';
import '../../css/q/qw6_pbcyu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="y7raadesu"/><path class="qw6_pbcyu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:index-pointing-up-light"} {...others} />);
}

export default Component;
