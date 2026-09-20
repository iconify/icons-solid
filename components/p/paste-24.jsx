import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o75vn0b-t.css';
import '../../css/k/kbzcbrwur.css';
import '../../css/w/wukahqb_c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o75vn0b-t"/><path class="kbzcbrwur"/><path clip-rule="evenodd" class="wukahqb_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:paste-24"} {...others} />);
}

export default Component;
