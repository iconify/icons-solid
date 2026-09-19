import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xe1_3nbpy.css';
import '../../css/g/ga0a0lbta.css';

const viewBox = {"width":54,"height":100};
const content = `<path class="xe1_3nbpy"/><path class="ga0a0lbta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:android"} {...others} />);
}

export default Component;
