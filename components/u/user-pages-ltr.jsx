import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4so3qlya.css';
import '../../css/l/lsxdb1s3e.css';
import '../../css/c/cyj7fswlr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p4so3qlya"/><path class="lsxdb1s3e"/><circle class="cyj7fswlr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:user-pages-ltr"} {...others} />);
}

export default Component;
