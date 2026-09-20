import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti4n6cxcz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ti4n6cxcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:unfold-less"} {...others} />);
}

export default Component;
