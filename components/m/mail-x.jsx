import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/l05kllblb.css';
import '../../css/m/mvuk3sn6m.css';
import '../../css/t/te-uyzerb.css';
import '../../css/s/s07l5sb7t.css';
import '../../css/z/z3kg_0ldp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="l05kllblb wm-shadow"/><path class="mvuk3sn6m wm-shadow"/><path class="te-uyzerb"/><path class="s07l5sb7t"/><path class="wm-s z3kg_0ldp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:mail-x"} {...others} />);
}

export default Component;
