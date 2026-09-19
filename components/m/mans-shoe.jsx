import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gq_x_3byb.css';
import '../../css/x/xxuy4sbhs.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="gq_x_3byb"/><path class="xxuy4sbhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:mans-shoe"} {...others} />);
}

export default Component;
