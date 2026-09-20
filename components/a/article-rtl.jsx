import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x16refvya.css';
import '../../css/a/a9mph4b6u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x16refvya"/><path class="a9mph4b6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:article-rtl"} {...others} />);
}

export default Component;
