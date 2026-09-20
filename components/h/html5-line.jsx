import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/helu_3bmo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="helu_3bmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:html5-line"} {...others} />);
}

export default Component;
