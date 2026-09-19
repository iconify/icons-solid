import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zy_wbc1rc.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="zy_wbc1rc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:web-template"} {...others} />);
}

export default Component;
