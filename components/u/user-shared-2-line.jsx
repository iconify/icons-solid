import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/it8quy38i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="it8quy38i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:user-shared-2-line"} {...others} />);
}

export default Component;
