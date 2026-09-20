import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kjn7jibdx.css';
import '../../css/x/xd_e_q94j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kjn7jibdx"/><path class="xd_e_q94j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:article-add"} {...others} />);
}

export default Component;
