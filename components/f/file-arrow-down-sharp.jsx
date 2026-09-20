import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zg5u9m4to.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zg5u9m4to"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:file-arrow-down-sharp"} {...others} />);
}

export default Component;
