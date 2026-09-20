import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/habq1_bvu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="habq1_bvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:keyboard-line"} {...others} />);
}

export default Component;
