import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ymr08vb0v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ymr08vb0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:layout-panel-top-solid"} {...others} />);
}

export default Component;
