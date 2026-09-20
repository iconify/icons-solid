import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6dnf7-nj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x6dnf7-nj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:question-circle-solid"} {...others} />);
}

export default Component;
