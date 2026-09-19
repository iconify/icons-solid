import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x5n7e6bfa.css';
import '../../css/f/f2u1hw__j.css';
import '../../css/i/i5arftb3u.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="x5n7e6bfa"/><path class="f2u1hw__j"/><path class="i5arftb3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:mirror"} {...others} />);
}

export default Component;
