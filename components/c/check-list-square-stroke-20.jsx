import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ldh8llb9w.css';
import '../../css/o/o8vspab8g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ldh8llb9w"/><path class="o8vspab8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:check-list-square-stroke-20"} {...others} />);
}

export default Component;
