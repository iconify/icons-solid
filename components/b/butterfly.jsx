import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pmdrw7a9k.css';
import '../../css/k/k830it7vm.css';
import '../../css/z/z9knzevgz.css';
import '../../css/p/p_ygg_mzw.css';
import '../../css/g/g7nv62b8u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="pmdrw7a9k"/><path class="k830it7vm"/><path class="z9knzevgz"/><path class="p_ygg_mzw"/><path class="g7nv62b8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:butterfly"} {...others} />);
}

export default Component;
