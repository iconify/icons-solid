import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iosqv_6xw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iosqv_6xw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:panel-right-close-solid"} {...others} />);
}

export default Component;
