import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aiap8ebun.css';
import '../../css/o/o1kvkvbiz.css';
import '../../css/n/n2y8m9bnx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="aiap8ebun"/><path class="o1kvkvbiz"/><path class="n2y8m9bnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-phpmailer"} {...others} />);
}

export default Component;
