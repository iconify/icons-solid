import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a35aq6bdj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a35aq6bdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:contacts-4-line"} {...others} />);
}

export default Component;
