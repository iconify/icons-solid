import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3h7ejbmm.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="p3h7ejbmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:line-arrow-down-dashed-square-remix"} {...others} />);
}

export default Component;
