import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rio62_2fs.css';
import '../../css/l/lfsagabkj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="rio62_2fs"/><path class="lfsagabkj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:crossed-fingers-medium"} {...others} />);
}

export default Component;
