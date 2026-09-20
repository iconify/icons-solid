import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkzg49b6g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jkzg49b6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:bot-off"} {...others} />);
}

export default Component;
