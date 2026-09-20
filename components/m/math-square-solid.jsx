import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htgra2j3s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="htgra2j3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:math-square-solid"} {...others} />);
}

export default Component;
