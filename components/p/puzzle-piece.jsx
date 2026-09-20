import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmae0kb8o.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hmae0kb8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:puzzle-piece"} {...others} />);
}

export default Component;
