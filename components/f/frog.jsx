import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vm-psu7uv.css';
import '../../css/c/cxt_p6ale.css';
import '../../css/v/vzrs0lbih.css';
import '../../css/b/blxkck8qi.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="vm-psu7uv"/><path class="cxt_p6ale"/><path class="vzrs0lbih"/><path class="blxkck8qi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:frog"} {...others} />);
}

export default Component;
