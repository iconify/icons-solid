import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edu-5ablw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="edu-5ablw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:message-square-info"} {...others} />);
}

export default Component;
