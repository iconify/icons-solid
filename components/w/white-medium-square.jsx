import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sw-5fmbdy.css';
import '../../css/o/owpkajbwg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="sw-5fmbdy"/><path class="owpkajbwg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:white-medium-square"} {...others} />);
}

export default Component;
