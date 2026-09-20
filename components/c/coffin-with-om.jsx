import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9c-be7dw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="f9c-be7dw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:coffin-with-om"} {...others} />);
}

export default Component;
