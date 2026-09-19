import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpe0vbb-w.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="tpe0vbb-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:lightbulb-slash-fill"} {...others} />);
}

export default Component;
