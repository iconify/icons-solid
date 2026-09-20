import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i5f1s0biu.css';
import '../../css/z/zput1obaq.css';
import '../../css/c/c6q4vpbxk.css';
import '../../css/d/da06ybbfk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i5f1s0biu"/><path class="zput1obaq"/><path clip-rule="evenodd" class="c6q4vpbxk"/><path clip-rule="evenodd" class="da06ybbfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:page-setup-16"} {...others} />);
}

export default Component;
