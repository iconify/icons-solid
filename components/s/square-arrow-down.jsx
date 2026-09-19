import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6pg4ekhn.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="f6pg4ekhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:square-arrow-down"} {...others} />);
}

export default Component;
