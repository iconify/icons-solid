import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcvyz99kw.css';
import '../../css/x/x3cg0r7yx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wcvyz99kw"/><path class="x3cg0r7yx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:yin-yang"} {...others} />);
}

export default Component;
