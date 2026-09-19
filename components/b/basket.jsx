import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tjn30lbcn.css';
import '../../css/d/d8d6hu87u.css';
import '../../css/s/sc-zjlc7f.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="tjn30lbcn"/><path class="d8d6hu87u"/><path class="sc-zjlc7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:basket"} {...others} />);
}

export default Component;
