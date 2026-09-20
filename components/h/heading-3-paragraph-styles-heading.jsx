import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p13isnbtv.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="p13isnbtv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:heading-3-paragraph-styles-heading"} {...others} />);
}

export default Component;
