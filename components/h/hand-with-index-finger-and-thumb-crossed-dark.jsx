import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c5zuxw69w.css';
import '../../css/t/t6-kl0b-c.css';
import '../../css/s/sw6q46v3r.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="c5zuxw69w"/><path class="t6-kl0b-c"/><path class="sw6q46v3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:hand-with-index-finger-and-thumb-crossed-dark"} {...others} />);
}

export default Component;
