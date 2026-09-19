import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v73zvf-5s.css';
import '../../css/f/fwet0iuhu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><rect class="v73zvf-5s"/><path class="fwet0iuhu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:play-or-pause-button"} {...others} />);
}

export default Component;
