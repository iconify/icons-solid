import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dr5sy3x-w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dr5sy3x-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:folder-fill-20"} {...others} />);
}

export default Component;
