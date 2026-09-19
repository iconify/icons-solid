import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jw-0m_b3v.css';
import '../../css/k/kmzc8gbuh.css';
import '../../css/g/gmdfz2brc.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="jw-0m_b3v"/><path class="kmzc8gbuh"/><path class="gmdfz2brc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:worm"} {...others} />);
}

export default Component;
