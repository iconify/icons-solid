import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/l/lbvlq5mem.css';
import '../../css/t/t7hx4fz_v.css';
import '../../css/r/rslfarb6v.css';
import '../../css/h/h9hstt17t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="lbvlq5mem"/><path class="t7hx4fz_v"/></g><path class="rslfarb6v"/><path class="h9hstt17t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:private-content-duotone"} {...others} />);
}

export default Component;
