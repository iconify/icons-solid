import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ui_yqjhja.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="ui_yqjhja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:left-magnifying-glass"} {...others} />);
}

export default Component;
