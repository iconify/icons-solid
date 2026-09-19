import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjhmuybxb.css';
import '../../css/t/tc6my_b3a.css';
import '../../css/x/xwldxi4ex.css';
import '../../css/x/xa5gy-bnw.css';
import '../../css/n/n0d6vss3v.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="rjhmuybxb"/><path class="tc6my_b3a"/><path class="xwldxi4ex"/><path class="xa5gy-bnw"/><path class="n0d6vss3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:snow-capped-mountain"} {...others} />);
}

export default Component;
