import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/moqj_8bur.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="moqj_8bur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:template-add-ltr"} {...others} />);
}

export default Component;
