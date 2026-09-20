import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fv2x-ef6c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fv2x-ef6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:eye-slash-solid"} {...others} />);
}

export default Component;
