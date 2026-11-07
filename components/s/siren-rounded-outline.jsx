import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kek-0ac7m.css';
import '../../css/v/v1fis2bwy.css';
import '../../css/d/dypmnxb4q.css';
import '../../css/c/ce-i1mh_z.css';
import '../../css/u/uljji2but.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kek-0ac7m"/><path class="v1fis2bwy"/><path clip-rule="evenodd" class="dypmnxb4q"/><path class="ce-i1mh_z"/><path class="uljji2but"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:siren-rounded-outline"} {...others} />);
}

export default Component;
