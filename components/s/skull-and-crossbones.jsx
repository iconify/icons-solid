import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pc0jvxbqt.css';
import '../../css/f/fk5rj3b7q.css';
import '../../css/m/m8b73kr7c.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="pc0jvxbqt"/><path class="fk5rj3b7q"/><path class="m8b73kr7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:skull-and-crossbones"} {...others} />);
}

export default Component;
