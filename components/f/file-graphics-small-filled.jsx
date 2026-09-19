import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zj_rtjbos.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="zj_rtjbos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:file-graphics-small-filled"} {...others} />);
}

export default Component;
