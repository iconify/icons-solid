import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ak7mb6b3t.css';
import '../../css/j/jfq3qu33i.css';
import '../../css/z/zlg4ve8af.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ak7mb6b3t"/><path class="jfq3qu33i"/><path class="zlg4ve8af"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:microphone"} {...others} />);
}

export default Component;
