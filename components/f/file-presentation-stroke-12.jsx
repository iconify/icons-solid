import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7cpy6-3z.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="t7cpy6-3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:file-presentation-stroke-12"} {...others} />);
}

export default Component;
