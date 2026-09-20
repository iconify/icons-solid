import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2kzi90wr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j2kzi90wr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:article-redirect-rtl"} {...others} />);
}

export default Component;
