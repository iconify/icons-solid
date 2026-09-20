import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sztb4eboa.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sztb4eboa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:question-square-bold"} {...others} />);
}

export default Component;
