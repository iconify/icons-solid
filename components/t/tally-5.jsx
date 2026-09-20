import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gphtcn8kb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gphtcn8kb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:tally-5"} {...others} />);
}

export default Component;
