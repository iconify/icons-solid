import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v73zvf-5s.css';
import '../../css/v/v7ni-bcgk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><rect class="v73zvf-5s"/><path class="v7ni-bcgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:information"} {...others} />);
}

export default Component;
