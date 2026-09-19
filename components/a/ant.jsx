import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m-1d2wutd.css';
import '../../css/a/amc1qtlun.css';
import '../../css/n/nvbta5b-e.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="m-1d2wutd"/><path class="amc1qtlun"/><path class="nvbta5b-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:ant"} {...others} />);
}

export default Component;
