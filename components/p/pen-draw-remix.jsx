import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oa8y0ib7a.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="oa8y0ib7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:pen-draw-remix"} {...others} />);
}

export default Component;
