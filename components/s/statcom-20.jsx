import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/says4171o.css';
import '../../css/o/oyczihcab.css';
import '../../css/w/w0wgm5b_c.css';
import '../../css/f/foabbbb8e.css';
import '../../css/w/wtqq7v8-v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="says4171o"/><path class="oyczihcab"/><path class="w0wgm5b_c"/><path class="foabbbb8e"/><path class="wtqq7v8-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:statcom-20"} {...others} />);
}

export default Component;
