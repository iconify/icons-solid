import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ay4xc3ohy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ay4xc3ohy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:envelope-question"} {...others} />);
}

export default Component;
