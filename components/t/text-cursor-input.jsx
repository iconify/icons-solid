import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vboym7chi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vboym7chi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:text-cursor-input"} {...others} />);
}

export default Component;
